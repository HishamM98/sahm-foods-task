import {
  ChangeDetectionStrategy,
  Component,
  effect,
  HostListener,
  inject,
  OnInit,
  signal,
  viewChild,
  ElementRef,
  computed,
} from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TranslatePipe } from '@ngx-translate/core';
import { OrderChannel, OrderStatus } from '../../../../core/models/api.types';
import { OrderCard } from '../../components/order-card/order-card';
import { groupOrdersIntoColumns } from '../../data/order-board.mapper';
import { Order, OrderColumn } from '../../models/order.model';
import { Router } from '@angular/router';
import { ToastService } from '../../../../shared/services/toast.service';
import { SkeletonModule } from 'primeng/skeleton';
import { OrdersStore } from '../../stores/orders-store.service';

@Component({
  selector: 'app-live-orders-page',
  imports: [TranslatePipe, OrderCard, DragDropModule, SkeletonModule],
  templateUrl: './live-orders-page.html',
  styleUrl: './live-orders-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveOrdersPage implements OnInit {
  dropdownRef = viewChild<ElementRef<HTMLDivElement>>('dropdownRef');
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);
  private readonly ordersStore = inject(OrdersStore);

  readonly loading = this.ordersStore.isLoading;
  readonly error = this.ordersStore.error;
  readonly showChannelDropdown = signal(false);
  readonly selectedChannel = signal<OrderChannel | undefined>(undefined);
  readonly selectedLabel = signal<string | undefined>(undefined);

  readonly columns = computed(() => groupOrdersIntoColumns(this.ordersStore.orders()));

  ngOnInit(): void {
    this.loadOrders();
  }

  columnCount(column: OrderColumn): string {
    return String(column.orders.length).padStart(2, '0');
  }

  openOrder(order: Order): void {
    this.router.navigate(['/', { outlets: { modal: ['order', order.id] } }]);
  }

  addOrder() {
    this.ordersStore.addOrder().subscribe({
      next: () => this.toastService.addSuccess('LIVE_ORDERS.SUCCESS.ADD_ORDER'),
      error: () => this.toastService.addError('LIVE_ORDERS.ERRORS.ADD_FAILED'),
    });
  }

  onServe(order: Order): void {
    this.ordersStore.updateOrderStatus(order.id, 'delivered').subscribe({
      next: () => this.toastService.addSuccess('LIVE_ORDERS.SUCCESS.SERVE_ORDER'),
      error: () => this.toastService.addError('LIVE_ORDERS.ERRORS.SERVE_FAILED'),
    });
  }

  retry(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.ordersStore.loadOrders(undefined, this.selectedChannel());
  }

  drop(event: CdkDragDrop<Order[]>): void {
    const previousData = event.previousContainer.data;
    const currentData = event.container.data;

    if (event.previousContainer === event.container) {
      moveItemInArray(currentData, event.previousIndex, event.currentIndex);
      return;
    }

    const order = previousData[event.previousIndex];
    const newStatus = event.container.id as OrderStatus;

    transferArrayItem(
      previousData,
      currentData,
      event.previousIndex,
      event.currentIndex,
    );

    this.ordersStore.updateOrderStatus(order.id, newStatus).subscribe({
      next: () => this.toastService.addSuccess('LIVE_ORDERS.SUCCESS.MOVE_ORDER'),
      error: () => this.toastService.addError('LIVE_ORDERS.ERRORS.MOVE_FAILED'),
    });
  }

  selectOption(value: OrderChannel | undefined, label: string | undefined) {
    this.selectedChannel.set(value);
    this.selectedLabel.set(label);
    this.showChannelDropdown.set(false);
    this.ordersStore.loadOrders(undefined, value);
  }

  toggleDropdown(): void {
    this.showChannelDropdown.set(!this.showChannelDropdown());
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const el = this.dropdownRef()?.nativeElement as HTMLElement | undefined;
    if (el && !el.contains(event.target as Node)) {
      this.showChannelDropdown.set(false);
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.showChannelDropdown.set(false);
    } else if (event.key === 'Enter' || event.key === ' ') {
      const activeEl = document.activeElement as HTMLElement;
      if (activeEl?.getAttribute('role') === 'option') {
        activeEl.click();
        event.preventDefault();
      }
    }
  }
}
