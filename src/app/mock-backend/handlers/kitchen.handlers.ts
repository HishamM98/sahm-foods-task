import { http, HttpResponse } from 'msw';
import { mockBackendConfig } from '../config';
import { mockDb } from '../data/db';
import { fakeSocketServer } from '../fake-socket-server';
import { maybeFail, withMockLatency } from '../utils/http-sim';

const base = mockBackendConfig.apiPrefix;

export const kitchenHandlers = [
  http.get(`${base}/kitchen/load`, async () => {
    await withMockLatency();
    const failed = maybeFail();
    if (failed) return failed;
    return HttpResponse.json({ data: mockDb.getKitchenLoad() });
  }),
];
