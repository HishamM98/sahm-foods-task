import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { fromEvent, merge, map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FakeSocketService } from './fake-socket.service';

@Injectable({ providedIn: 'root' })
export class ConnectivityService {
  private readonly fakeSocket = inject(FakeSocketService);

  private readonly onlineSignal = toSignal(
    merge(fromEvent(window, 'online'), fromEvent(window, 'offline')).pipe(
      map(() => navigator.onLine),
      startWith(navigator.onLine),
    ),
    { initialValue: navigator.onLine },
  );

  private readonly socketEffect = effect(() => {
    if (this.online()) {
      this.fakeSocket.connect();
    } else {
      this.fakeSocket.disconnect();
    }
  });

  readonly online = computed(() => this.onlineSignal());
  readonly offline = computed(() => !this.onlineSignal());

  /** Manual override for demos / tests. */
  private readonly forcedOffline = signal<boolean | null>(null);

  readonly isOnline = computed(() => {
    const forced = this.forcedOffline();
    if (forced !== null) {
      return !forced;
    }
    return this.online();
  });

  simulateOffline(offline = true): void {
    this.forcedOffline.set(offline);
  }

  clearSimulation(): void {
    this.forcedOffline.set(null);
  }
}
