import { computed, inject, Injectable, signal } from '@angular/core';
import { OrdersApiService } from '../../../core/api/orders-api.service';
import { OrderDto, OrderStatus } from '../../../core/models/api.types';
import { ChannelWaitStats, OrderChannel } from '../models/order.model';
import { FakeSocketService } from '../../../core/services/fake-socket.service';
import { filter, Observable, of, take, tap } from 'rxjs';
import { OfflineQueueService, QueuedAction } from '../../../core/services/offline-http-queue.service';
import { environment } from '../../../../environments/environment';

interface ActiveFilter {
  status?: OrderStatus;
  channel?: OrderChannel;
}

@Injectable({
  providedIn: 'root',
})
export class OrdersStore {
  private readonly api = inject(OrdersApiService);
  private readonly socket = inject(FakeSocketService);
  private readonly offlineQueue = inject(OfflineQueueService);

  private ordersState = signal<OrderDto[]>([]);
  private isLoadingState = signal<boolean>(false);
  private errorState = signal<string | null>(null);
  private loadedOrdersState = signal<boolean>(false);
  private currentFilterState = signal<ActiveFilter | null>(null);
  private isSubmittingState = signal<boolean>(false);

  readonly orders = this.ordersState.asReadonly();
  readonly isLoading = this.isLoadingState.asReadonly();
  readonly error = this.errorState.asReadonly();
  readonly currentFilter = this.currentFilterState.asReadonly();
  readonly isSubmitting = this.isSubmittingState.asReadonly();

  readonly pendingOrdersCount = computed(() =>
    this.orders().filter(o => o.status === 'received' || o.status === 'preparing').length
  );

  readonly completedOrdersCount = computed(() =>
    this.orders().filter(o => o.status === 'delivered' || o.status === 'completed').length
  );

  readonly activeOrders = computed(() =>
    this.orders().filter(o => !o.closedAt)
  );

  readonly activeOrdersCount = computed(() => this.activeOrders().length);

  readonly delayedOrders = computed(() =>
    this.activeOrders().filter(o => o.delayed)
  );

  readonly delayedOrdersCount = computed(() => this.delayedOrders().length);

  readonly newOrdersCount = computed(() =>
    this.orders().filter(o => o.isNew).length
  );

  readonly callingOrders = computed(() =>
    this.orders().filter(o => o.calling)
  );

  readonly callingOrdersCount = computed(() => this.callingOrders().length);


  readonly ordersByChannel = computed(() => {
    const groups = new Map<OrderChannel, OrderDto[]>();
    for (const order of this.activeOrders()) {
      const list = groups.get(order.channel) ?? [];
      list.push(order);
      groups.set(order.channel, list);
    }
    return groups;
  });

  readonly channelWaitStats = computed<ChannelWaitStats[]>(() => {
    const groups = this.ordersByChannel();
    return Array.from(groups.entries()).map(([channel, list]) => {
      const waits = list.map(o => o.elapsedSeconds);
      const delayedCount = list.filter(o => o.delayed).length;
      const avgWaitSeconds = waits.length
        ? Math.round(waits.reduce((sum, s) => sum + s, 0) / waits.length)
        : 0;
      const maxWaitSeconds = waits.length ? Math.max(...waits) : 0;

      return {
        channel,
        activeCount: list.length,
        delayedCount,
        avgWaitSeconds,
        maxWaitSeconds,
        onTrack: delayedCount === 0,
      };
    });
  });

  readonly avgDwellSeconds = computed(() => {
    const active = this.activeOrders();
    if (!active.length) return 0;
    const total = active.reduce((sum, o) => sum + o.elapsedSeconds, 0);
    return Math.round(total / active.length);
  });

  constructor() {
    this.setupOrderUpdates();
  }

  loadOrders(status?: OrderStatus, channel?: OrderChannel): void {
    const current = this.currentFilterState();

    if (
      this.isLoadingState() ||
      (current && current.status === status && current.channel === channel)
    ) {
      return;
    }

    this.isLoadingState.set(true);
    this.errorState.set(null);

    this.api.list(status, channel).subscribe({
      next: (orders) => {
        this.ordersState.set(orders);
        this.isLoadingState.set(false);
        this.loadedOrdersState.set(true);
        this.currentFilterState.set({ status, channel });
      },
      error: (err) => {
        this.errorState.set('Failed to load orders.');
        this.isLoadingState.set(false);
      }
    });
  }

  addOrder(): Observable<OrderDto | null> {
    this.isSubmittingState.set(true);
    this.errorState.set(null);

    const queuedAction: QueuedAction = {
      id: crypto.randomUUID(),
      url: `${environment.apiBaseUrl}/orders`,
      method: 'POST',
      body: {},
      timestamp: Date.now()
    };

    if (!this.offlineQueue.isOnline()) {
      this.offlineQueue.enqueueAction(queuedAction);
      return of(null);
    }

    return this.api.create().pipe(
      take(1),
      tap({
        next: () => {
          this.isSubmittingState.set(false);
        },
        error: (err) => {
          this.isSubmittingState.set(false);
        }
      })
    );
  }

  updateOrderStatus(orderId: string, status: OrderStatus): Observable<OrderDto | null> {
    this.isSubmittingState.set(true);
    this.errorState.set(null);

    const queuedAction: QueuedAction = {
      id: crypto.randomUUID(),
      url: `${environment.apiBaseUrl}/orders/${orderId}/status`,
      method: 'PATCH',
      body: { status },
      timestamp: Date.now()
    };

    if (!this.offlineQueue.isOnline()) {
      this.offlineQueue.enqueueAction(queuedAction);
      return of(null);
    }

    return this.api.updateStatus(orderId, status).pipe(
      take(1),
      tap({
        next: () => {
          this.isSubmittingState.set(false);
        },
        error: (err) => {
          this.isSubmittingState.set(false);
        }
      })
    );
  }

  private setupOrderUpdates(): void {
    this.socket.events().pipe(
      filter(event => event.type === 'order.updated' || event.type === 'order.created'),
      tap(event => {
        debugger;
        const order = event.payload as OrderDto;
        const activeFilter = this.currentFilterState();

        const matchesFilter = activeFilter
          ? (order.status === activeFilter.status || activeFilter.status === undefined) && (order.channel === activeFilter.channel || activeFilter.channel === undefined)
          : true;

        this.ordersState.update(currentOrders => {
          const index = currentOrders.findIndex(o => o.id === order.id);

          if (index !== -1) {
            if (matchesFilter) {
              const updatedList = [...currentOrders];
              updatedList[index] = order;
              return updatedList;
            } else {
              return currentOrders.filter(o => o.id !== order.id);
            }
          } else if (matchesFilter) {
            return [order, ...currentOrders];
          }

          return currentOrders;
        });
      })
    ).subscribe();
  }
}
