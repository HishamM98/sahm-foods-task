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
    return HttpResponse.json({ data: mockDb.kitchenLoad });
  }),

  http.put(`${base}/kitchen/load`, async ({ request }) => {
    await withMockLatency();
    const failed = maybeFail();
    if (failed) return failed;

    const body = (await request.json()) as { percent?: number };
    if (typeof body.percent !== 'number') {
      return HttpResponse.json({ message: 'percent is required' }, { status: 400 });
    }

    const load = mockDb.setKitchenLoad(Math.min(100, Math.max(0, body.percent)));
    fakeSocketServer.publishKitchenLoad(load);
    return HttpResponse.json({ data: load });
  }),
];
