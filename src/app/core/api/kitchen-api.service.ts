import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { KitchenLoadDto } from '../models/api.types';

@Injectable({ providedIn: 'root' })
export class KitchenApiService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiBaseUrl}/kitchen/load`;

  getLoad(): Observable<KitchenLoadDto> {
    return this.http.get<{ data: KitchenLoadDto }>(this.base).pipe(map((res) => res.data));
  }

  setLoad(percent: number): Observable<KitchenLoadDto> {
    return this.http
      .put<{ data: KitchenLoadDto }>(this.base, { percent })
      .pipe(map((res) => res.data));
  }
}
