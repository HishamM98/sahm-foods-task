import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AiSuggestionResponseDto } from '../models/api.types';

@Injectable({ providedIn: 'root' })
export class AiApiService {
  private readonly http = inject(HttpClient);

  getSuggestions(orderId: string): Observable<AiSuggestionResponseDto> {
    return this.http
      .get<{ data: AiSuggestionResponseDto }>(
        `${environment.apiBaseUrl}/ai/orders/${orderId}/suggestions`,
      )
      .pipe(map((res) => res.data));
  }

  /** Returns NDJSON text for streaming-sim UIs. */
  getSuggestionsStream(orderId: string): Observable<string> {
    return this.http.get(
      `${environment.apiBaseUrl}/ai/orders/${orderId}/suggestions`,
      {
        params: { stream: 'true' },
        responseType: 'text',
      },
    );
  }

  retrySuggestions(orderId: string): Observable<AiSuggestionResponseDto> {
    return this.http
      .post<{ data: AiSuggestionResponseDto }>(
        `${environment.apiBaseUrl}/ai/orders/${orderId}/suggestions/retry`,
        {},
      )
      .pipe(map((res) => res.data));
  }
}
