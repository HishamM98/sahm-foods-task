import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { OrderDto, OrderStatus } from '../models/api.types';

interface ApiListResponse<T> {
  data: T;
}

@Injectable({ providedIn: 'root' })
export class OrdersApiService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiBaseUrl}/orders`;

  list(status?: OrderStatus): Observable<OrderDto[]> {
    let params = new HttpParams();
    if (status) {
      params = params.set('status', status);
    }
    return this.http
      .get<ApiListResponse<OrderDto[]>>(this.base, { params })
      .pipe(map((res) => res.data));
  }

  create(): Observable<OrderDto> {
    return this.http
      .post<ApiListResponse<OrderDto>>(this.base, {})
      .pipe(map((res) => res.data));
  }

  getById(id: string): Observable<OrderDto> {
    return this.http
      .get<ApiListResponse<OrderDto>>(`${this.base}/${id}`)
      .pipe(map((res) => res.data));
  }

  updateStatus(id: string, status: OrderStatus): Observable<OrderDto> {
    return this.http
      .patch<ApiListResponse<OrderDto>>(`${this.base}/${id}/status`, { status })
      .pipe(map((res) => res.data));
  }
}
