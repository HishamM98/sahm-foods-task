import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent, lastValueFrom } from 'rxjs';

export interface QueuedAction {
  id: string;
  url: string;
  method: 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body: any;
  timestamp: number;
}

@Injectable({ providedIn: 'root' })
export class OfflineQueueService {
  isOnline = signal<boolean>(navigator.onLine);
  private queue: QueuedAction[] = [];
  private pendingIds = new Set<string>();

  constructor(private http: HttpClient) {
    fromEvent(window, 'online').subscribe(() => {
      this.isOnline.set(true);
      this.processQueue();
    });

    fromEvent(window, 'offline').subscribe(() => {
      this.isOnline.set(false);
    });

    this.loadQueueFromStorage();
  }

  isActionPending(actionId: string): boolean {
    return this.pendingIds.has(actionId);
  }

  enqueueAction(action: QueuedAction): void {
    if (this.pendingIds.has(action.id)) return;

    this.pendingIds.add(action.id);
    this.queue.push(action);
    this.saveQueueToStorage();
  }

  private async processQueue(): Promise<void> {
    if (this.queue.length === 0) return;

    const queueCopy = [...this.queue];
    for (const action of queueCopy) {
      try {
        await lastValueFrom(
          this.http.request(action.method, action.url, {
            body: action.body,
            responseType: 'json'
          })
        );

        this.queue = this.queue.filter(a => a.id !== action.id);
        this.pendingIds.delete(action.id);
        this.saveQueueToStorage();
      } catch (err) {
        console.error(`Failed to process queued action ${action.id}`, err);
        if (!navigator.onLine) break;
      }
    }
  }

  private saveQueueToStorage(): void {
    localStorage.setItem('http_offline_queue', JSON.stringify(this.queue));
  }

  private loadQueueFromStorage(): void {
    const saved = localStorage.getItem('http_offline_queue');
    if (saved) {
      this.queue = JSON.parse(saved);
      this.queue.forEach(a => this.pendingIds.add(a.id));
    }
  }
}