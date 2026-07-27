import { Injectable, OnDestroy } from '@angular/core';
import { Observable, filter, map, shareReplay } from 'rxjs';
import {
  KitchenLoadDto,
  OrderDto,
  SocketEvent,
  SocketEventType,
} from '../models/api.types';
import { fakeSocketServer } from '../../mock-backend/fake-socket-server';
import { environment } from '../../../environments/environment';

/**
 * App-facing fake WebSocket abstraction.
 * Swap the internals for a real WS client later without touching features.
 */
@Injectable({ providedIn: 'root' })
export class FakeSocketService implements OnDestroy {
  private readonly stream$: Observable<SocketEvent>;

  constructor() {
    this.stream$ = fakeSocketServer.asObservable().pipe(
      shareReplay({ bufferSize: 1, refCount: true }),
    );

    this.connect();
  }

  connect(): void {
    if (environment.useMockBackend) {
      fakeSocketServer.start();
    }
  }

  disconnect(): void {
    if (environment.useMockBackend) {
      fakeSocketServer.stop();
    }
  }

  events(): Observable<SocketEvent> {
    return this.stream$;
  }

  ofType<T>(type: SocketEventType): Observable<SocketEvent<T>> {
    return this.stream$.pipe(
      filter((event): event is SocketEvent<T> => event.type === type),
    );
  }

  orderUpdates(): Observable<OrderDto> {
    return this.ofType<OrderDto>('order.updated').pipe(map((e) => e.payload));
  }

  kitchenLoadUpdates(): Observable<KitchenLoadDto> {
    return this.ofType<KitchenLoadDto>('kitchen.load.changed').pipe(
      map((e) => e.payload),
    );
  }

  ngOnDestroy(): void {
    // Root singleton — intentionally no teardown of the shared mock socket server.
  }
}
