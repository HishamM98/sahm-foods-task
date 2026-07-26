import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
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
  readonly recentSearches = computed(() => this._recentSearches());
  private readonly _recentSearches = signal<string[]>([]);

  addRecentSearch(search: string): void {
    this._recentSearches.update(searches => [search, ...searches].slice(0, 10));
  }

  clearRecentSearches(): void {
    this._recentSearches.set([]);
  }

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
      .get<{ data: ProductDto; }>(`${this.base}/${id}`)
      .pipe(map((res) => res.data));
  }
}
