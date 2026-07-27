import { delay, HttpResponse } from 'msw';
import { mockBackendConfig } from '../config';

type FailBody = { message: string; code: string; };

export async function withMockLatency(): Promise<void> {
  const jitter = Math.floor(Math.random() * 180);
  await delay(mockBackendConfig.latencyMs + jitter);
}

export function maybeFail(): HttpResponse<FailBody> | null {
  if (!navigator.onLine) {
    return HttpResponse.json(
      {
        message: 'Network is offline',
        code: 'NETWORK_OFFLINE',
      },
      { status: 503 },
    );
  }
  if (Math.random() < mockBackendConfig.failureRate) {
    return HttpResponse.json(
      {
        message: 'Simulated upstream failure',
        code: 'MOCK_TRANSIENT_ERROR',
      },
      { status: 503 },
    );
  }
  return null;
}
