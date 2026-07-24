import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProductDto } from '../models/api.types';

interface ProductsResponse {
  data: ProductDto[];
  meta: {
    total: number;
    limit: number;
    offset: number;
    categories: string[];
  };
}

@Injectable({ providedIn: 'root' })
export class ProductsApiService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiBaseUrl}/products`;

  search(options: {
    q?: string;
    category?: string;
    limit?: number;
    offset?: number;
  } = {}): Observable<ProductsResponse> {
    let params = new HttpParams();
    if (options.q) params = params.set('q', options.q);
    if (options.category) params = params.set('category', options.category);
    if (options.limit != null) params = params.set('limit', options.limit);
    if (options.offset != null) params = params.set('offset', options.offset);
    return this.http.get<ProductsResponse>(this.base, { params });
  }

  getById(id: string): Observable<ProductDto> {
    return this.http
      .get<{ data: ProductDto }>(`${this.base}/${id}`)
      .pipe(map((res) => res.data));
  }
}
