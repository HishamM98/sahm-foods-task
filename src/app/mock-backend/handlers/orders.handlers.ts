import { http, HttpResponse } from 'msw';
import { OrderStatus } from '../../core/models/api.types';
import { mockBackendConfig } from '../config';
import { mockDb } from '../data/db';
import { fakeSocketServer } from '../fake-socket-server';
import { maybeFail, withMockLatency } from '../utils/http-sim';

const base = mockBackendConfig.apiPrefix;

export const ordersHandlers = [
  http.post(`${base}/orders`, async ({ request }) => {
    await withMockLatency();
    const failed = maybeFail();
    if (failed) return failed;

    const order = mockDb.addOrder();
    return HttpResponse.json({ data: order });
  }),

  http.get(`${base}/orders`, async ({ request }) => {
    await withMockLatency();
    const failed = maybeFail();
    if (failed) return failed;

    const url = new URL(request.url);
    const status = url.searchParams.get('status') as OrderStatus | null;
    return HttpResponse.json({
      data: mockDb.listOrders(status ?? undefined),
    });
  }),

  http.get(`${base}/orders/:id`, async ({ params }) => {
    await withMockLatency();
    const failed = maybeFail();
    if (failed) return failed;

    const order = mockDb.getOrder(String(params['id']));
    if (!order) {
      return HttpResponse.json({ message: 'Order not found' }, { status: 404 });
    }
    return HttpResponse.json({ data: order });
  }),

  http.patch(`${base}/orders/:id/status`, async ({ params, request }) => {
    await withMockLatency();
    const failed = maybeFail();
    if (failed) return failed;

    const body = (await request.json()) as { status?: OrderStatus; };
    if (!body.status) {
      return HttpResponse.json({ message: 'status is required' }, { status: 400 });
    }

    const updated = mockDb.updateOrderStatus(String(params['id']), body.status);
    if (!updated) {
      return HttpResponse.json({ message: 'Order not found' }, { status: 404 });
    }

    fakeSocketServer.publishOrderUpdated(updated);
    return HttpResponse.json({ data: updated });
  }),
];
