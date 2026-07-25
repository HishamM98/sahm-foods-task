// cache.interceptor.ts
import { HttpInterceptorFn, HttpResponse, HttpContextToken } from '@angular/common/http';
import { inject } from '@angular/core';
import { of, tap } from 'rxjs';
import { CacheService } from '../services/cache.service';

// Context tokens let individual requests opt out or set a custom TTL
export const BYPASS_CACHE = new HttpContextToken<boolean>(() => false);
export const CACHE_TTL_MS = new HttpContextToken<number | undefined>(() => undefined);

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cacheService = inject(CacheService);

  // Only cache GET requests, and allow explicit bypass
  if (req.method !== 'GET' || req.context.get(BYPASS_CACHE)) {
    return next(req);
  }

  const key = cacheService.buildKey(req.urlWithParams);
  const cached = cacheService.get(key);

  if (cached) {
    return of(cached.clone());
  }

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        const ttl = req.context.get(CACHE_TTL_MS);
        cacheService.set(key, event, ttl);
      }
    })
  );
};