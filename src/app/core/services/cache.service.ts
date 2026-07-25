// cache.service.ts
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

export interface CacheEntry {
  response: HttpResponse<any>;
  createdAt: number;
  expiresAt: number;
}

@Injectable({ providedIn: 'root' })
export class CacheService {
  private cache = new Map<string, CacheEntry>();

  // Default TTL: 5 minutes
  private defaultTtlMs = 5 * 60 * 1000;

  /** Build a cache key from method + url + params */
  buildKey(url: string, params?: string): string {
    return params ? `${url}?${params}` : url;
  }

  get(key: string): HttpResponse<any> | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    return entry.response;
  }

  set(key: string, response: HttpResponse<any>, ttlMs?: number): void {
    const ttl = ttlMs ?? this.defaultTtlMs;
    this.cache.set(key, {
      response,
      createdAt: Date.now(),
      expiresAt: Date.now() + ttl,
    });
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  /** Invalidate a single entry */
  invalidate(key: string): void {
    this.cache.delete(key);
  }

  /** Invalidate all entries whose key starts with a given prefix (e.g. a base URL) */
  invalidateByPrefix(prefix: string): void {
    for (const key of this.cache.keys()) {
      if (key.startsWith(prefix)) {
        this.cache.delete(key);
      }
    }
  }

  clear(): void {
    this.cache.clear();
  }
}