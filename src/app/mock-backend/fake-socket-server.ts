import { Observable, Subject } from 'rxjs';
import {
  KitchenLoadDto,
  OrderDto,
  SocketEvent,
  SocketEventType,
} from '../core/models/api.types';
import { mockBackendConfig } from './config';
import { mockDb } from './data/db';

/**
 * In-browser fake socket server.
 * Features should consume events via {@link FakeSocketService}, not this module directly.
 */
class FakeSocketServer {
  private readonly events$ = new Subject<SocketEvent>();
  private timerId: ReturnType<typeof setInterval> | null = null;
  private started = false;

  asObservable(): Observable<SocketEvent> {
    return this.events$.asObservable();
  }

  start(): void {
    if (this.started) {
      return;
    }
    this.started = true;
    this.timerId = setInterval(() => this.tick(), mockBackendConfig.socketTickMs);
  }

  stop(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.started = false;
  }

  publish<T>(type: SocketEventType, payload: T): void {
    this.events$.next({
      type,
      payload,
      at: new Date().toISOString(),
    });
  }

  /** Emit an order update after REST mutations so UI stays in sync. */
  publishOrderUpdated(order: OrderDto): void {
    this.publish('order.updated', order);
  }

  publishKitchenLoad(load: KitchenLoadDto): void {
    this.publish('kitchen.load.changed', load);
  }

  private tick(): void {
    this.publish('connection.heartbeat', { ok: true });

    mockDb.bumpElapsed();

    // Push one random active order update (elapsed / delayed flags).
    const active = mockDb.orders.filter((o) => o.status !== 'completed');
    if (active.length) {
      const target = active[Math.floor(Math.random() * active.length)];
      mockDb.updateOrderStatus(target.id, target.status === 'received' ? 'preparing' : target.status === 'preparing' ? 'ready' : target.status === 'ready' ? 'delivered' : 'completed');
      this.publishOrderUpdated(mockDb.getOrder(target.id)!);
    }

    const newOrder = mockDb.addOrder();
    this.publish('order.created', newOrder);
    this.publishKitchenLoad(mockDb.getKitchenLoad());
  }
}

export const fakeSocketServer = new FakeSocketServer();
