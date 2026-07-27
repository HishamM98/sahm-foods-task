import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { KitchenLoadDto } from '../models/api.types';
import { BYPASS_CACHE } from '../interceptors/cache.interceptor';

@Injectable({ providedIn: 'root' })
export class KitchenApiService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiBaseUrl}/kitchen/load`;

  getLoad(): Observable<KitchenLoadDto> {
    const contextToken = new HttpContext().set(BYPASS_CACHE, true);
    return this.http.get<{ data: KitchenLoadDto; }>(this.base, { context: contextToken }).pipe(map((res) => res.data));
  }
}
