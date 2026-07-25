import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, forkJoin, of, take } from 'rxjs';
import { AiApiService } from '../../../../core/api/ai-api.service';
import { OrdersApiService } from '../../../../core/api/orders-api.service';
import {
  AiSuggestionDto,
  OrderDto,
  OrderStatus,
} from '../../../../core/models/api.types';
import { I18nService } from '../../../../core/services/i18n.service';
import { SkeletonModule } from 'primeng/skeleton';

const NEXT_STATUS: Partial<Record<OrderStatus, OrderStatus>> = {
  received: 'preparing',
  preparing: 'ready',
  ready: 'delivered',
  delivered: 'completed',
};

const PRIMARY_ACTION_KEY: Partial<Record<OrderStatus, string>> = {
  received: 'ORDER_DETAILS.ACTIONS.MOVE_TO_PREPARING',
  preparing: 'ORDER_DETAILS.ACTIONS.MOVE_TO_READY',
  ready: 'ORDER_DETAILS.ACTIONS.MOVE_TO_DELIVERED',
  delivered: 'ORDER_DETAILS.ACTIONS.MOVE_TO_COMPLETED',
};

const CHANNEL_KEY: Record<OrderDto['channel'], string> = {
  delivery: 'LIVE_ORDERS.CHANNEL.DELIVERY',
  'walk-in': 'LIVE_ORDERS.CHANNEL.WALK_IN',
  online: 'LIVE_ORDERS.CHANNEL.ONLINE',
};

@Component({
  selector: 'app-order-details',
  imports: [TranslatePipe, NgOptimizedImage, SkeletonModule],
  templateUrl: './order-details.html',
  styleUrl: './order-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'order-details',
  },
})
export class OrderDetails implements OnInit {
  readonly orderId = input.required<string>();

  private readonly ordersApi = inject(OrdersApiService);
  private readonly aiApi = inject(AiApiService);
  private readonly translate = inject(TranslateService);
  private readonly dialogRef = inject(DynamicDialogRef, { optional: true });
  protected readonly i18n = inject(I18nService);

  readonly order = signal<OrderDto | null>(null);
  readonly suggestions = signal<AiSuggestionDto[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly actionBusy = signal(false);
  readonly aiPrompt = signal('');

  readonly channelKey = computed(() => {
    const channel = this.order()?.channel;
    return channel ? CHANNEL_KEY[channel] : '';
  });

  readonly metaLine = computed(() => {
    const order = this.order();
    if (!order) {
      return '';
    }
    const placed = this.formatTime(order.createdAt);
    if (!order.etaAt) {
      return this.translate.instant('ORDER_DETAILS.PLACED', { time: placed });
    }
    const eta = this.formatTime(order.etaAt);
    const remaining = Math.max(
      0,
      Math.round((new Date(order.etaAt).getTime() - Date.now()) / 60_000),
    );
    return this.translate.instant('ORDER_DETAILS.PLACED_ETA', {
      time: placed,
      eta,
      remaining,
    });
  });

  readonly hasAddress = computed(() => {
    const customer = this.order()?.customer;
    return Boolean(customer?.addressLine1 || customer?.addressLine2);
  });

  readonly showMap = computed(() => this.order()?.channel === 'delivery');

  readonly primaryActionKey = computed(() => {
    const status = this.order()?.status;
    return status ? (PRIMARY_ACTION_KEY[status] ?? null) : null;
  });

  readonly canAdvance = computed(() => {
    const status = this.order()?.status;
    return status != null && NEXT_STATUS[status] != null;
  });

  ngOnInit(): void {
    this.load();
  }

  close(): void {
    this.dialogRef?.close();
  }

  onAiPromptInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.aiPrompt.set(value);
  }

  lineTotal(unitPrice: number, quantity: number): string {
    return this.formatMoney(unitPrice * quantity);
  }

  formatMoney(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }

  timelineTime(at?: string, inProgress?: boolean): string {
    if (inProgress || !at) {
      return this.translate.instant('ORDER_DETAILS.TIMELINE.IN_PROGRESS');
    }
    return this.formatTime(at);
  }

  suggestionClass(type: AiSuggestionDto['type']): string {
    return `order-details__ai-card order-details__ai-card--${type}`;
  }

  advanceStatus(): void {
    const order = this.order();
    if (!order || this.actionBusy()) {
      return;
    }
    const next = NEXT_STATUS[order.status];
    if (!next) {
      return;
    }
    this.actionBusy.set(true);
    this.ordersApi
      .updateStatus(order.id, next)
      .pipe(
        take(1),
        catchError(() => {
          this.error.set(
            this.translate.instant('ORDER_DETAILS.ERRORS.MOVE_FAILED'),
          );
          this.actionBusy.set(false);
          return of(null);
        }),
      )
      .subscribe((updated) => {
        this.actionBusy.set(false);
        if (updated) {
          this.dialogRef?.close(updated);
        }
      });
  }

  private load(): void {
    const id = this.orderId();
    if (!id) {
      this.loading.set(false);
      this.error.set(this.translate.instant('ORDER_DETAILS.ERRORS.LOAD_FAILED'));
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    forkJoin({
      order: this.ordersApi.getById(id).pipe(catchError(() => of(null))),
      ai: this.aiApi.getSuggestions(id).pipe(
        catchError(() =>
          of({ orderId: id, suggestions: [], generatedAt: new Date().toISOString() }),
        ),
      ),
    })
      .pipe(take(1))
      .subscribe(({ order, ai }) => {
        this.loading.set(false);
        if (!order) {
          this.error.set(
            this.translate.instant('ORDER_DETAILS.ERRORS.LOAD_FAILED'),
          );
          return;
        }
        this.order.set(order);
        this.suggestions.set(ai.suggestions);
      });
  }

  private formatTime(iso: string): string {
    const lang = this.translate.getCurrentLang() || 'en';
    return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-US', {
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date(iso));
  }
}
