import { delay, HttpResponse } from 'msw';
import { mockBackendConfig } from '../config';

type FailBody = { message: string; code: string };

export async function withMockLatency(): Promise<void> {
  const jitter = Math.floor(Math.random() * 180);
  await delay(mockBackendConfig.latencyMs + jitter);
}

export function maybeFail(): HttpResponse<FailBody> | null {
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
