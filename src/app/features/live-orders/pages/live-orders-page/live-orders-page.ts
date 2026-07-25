import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TranslatePipe } from '@ngx-translate/core';
import { OrdersApiService } from '../../../../core/api/orders-api.service';
import { OrderDto, OrderStatus } from '../../../../core/models/api.types';
import { FakeSocketService } from '../../../../core/services/fake-socket.service';
import { OrderCard } from '../../components/order-card/order-card';
import { groupOrdersIntoColumns } from '../../data/order-board.mapper';
import { Order, OrderColumn } from '../../models/order.model';
import { Router } from '@angular/router';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-live-orders-page',
  imports: [TranslatePipe, OrderCard, DragDropModule],
  templateUrl: './live-orders-page.html',
  styleUrl: './live-orders-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveOrdersPage implements OnInit {
  private readonly ordersApi = inject(OrdersApiService);
  private readonly socket = inject(FakeSocketService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly toastService = inject(ToastService);
  private readonly orders = signal<OrderDto[]>([]);
  private readonly router = inject(Router);

  readonly columns = signal<OrderColumn[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadOrders();
    this.socket
      .orderUpdates()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((updated) => this.upsertOrder(updated));

    this.socket
      .ofType<OrderDto>('order.created')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => this.upsertOrder(event.payload));
  }

  columnCount(column: OrderColumn): string {
    return String(column.orders.length).padStart(2, '0');
  }

  openOrder(order: Order): void {
    this.router.navigate(['/', { outlets: { modal: ['order', order.id] } }]);
  }

  addOrder() {
    this.ordersApi
      .create()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (order) => this.upsertOrder(order),
        error: () => this.toastService.addError('LIVE_ORDERS.ERRORS.ADD_FAILED'),
      });
  }

  onServe(order: Order): void {
    this.ordersApi
      .updateStatus(order.id, 'delivered')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (updated) => this.upsertOrder(updated),
        error: () => this.error.set('LIVE_ORDERS.ERRORS.SERVE_FAILED'),
      });
  }

  retry(): void {
    this.loadOrders();
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

    this.ordersApi
      .updateStatus(order.id, newStatus)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.toastService.addSuccess('LIVE_ORDERS.SUCCESS.MOVE_ORDER'),
        error: () => {
          this.toastService.addError('LIVE_ORDERS.ERRORS.MOVE_FAILED');
          transferArrayItem(
            currentData,
            previousData,
            event.currentIndex,
            event.previousIndex
          );
        },
      });
  }

  private loadOrders(): void {
    this.loading.set(true);
    this.error.set(null);
    this.ordersApi
      .list()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (list) => {
          this.orders.set(list);
          this.columns.set(groupOrdersIntoColumns(list));
          this.loading.set(false);
        },
        error: () => {
          this.error.set('LIVE_ORDERS.ERRORS.LOAD_FAILED');
          this.loading.set(false);
        },
      });
  }

  private upsertOrder(updated: OrderDto): void {
    const next = [...this.orders()];
    const index = next.findIndex((o) => o.id === updated.id);
    if (index >= 0) {
      next[index] = updated;
    } else {
      next.unshift(updated);
    }
    this.orders.set(next);
    this.columns.set(groupOrdersIntoColumns(next));
  }
}
