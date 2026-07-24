import { delay, http, HttpResponse } from 'msw';
import { mockBackendConfig } from '../config';
import { AI_STREAM_CHUNKS } from '../data/ai-suggestions.seed';
import { mockDb } from '../data/db';
import { maybeFail, withMockLatency } from '../utils/http-sim';

const base = mockBackendConfig.apiPrefix;

export const aiHandlers = [
  http.get(`${base}/ai/orders/:orderId/suggestions`, async ({ params, request }) => {
    await withMockLatency();
    const failed = maybeFail();
    if (failed) return failed;

    const orderId = String(params['orderId']);
    const order = mockDb.getOrder(orderId);
    if (!order) {
      return HttpResponse.json({ message: 'Order not found' }, { status: 404 });
    }

    const url = new URL(request.url);
    const stream = url.searchParams.get('stream') === 'true';

    if (stream) {
      // NDJSON-ish streaming simulation: one JSON line per chunk, then final payload.
      const suggestions = mockDb.suggestionsFor(orderId);
      const lines = [
        ...AI_STREAM_CHUNKS.map((text) => JSON.stringify({ type: 'chunk', text })),
        JSON.stringify({
          type: 'complete',
          data: {
            orderId,
            suggestions,
            generatedAt: new Date().toISOString(),
          },
        }),
      ];

      for (const _ of AI_STREAM_CHUNKS) {
        await delay(350);
      }

      return HttpResponse.text(lines.join('\n') + '\n', {
        headers: { 'Content-Type': 'application/x-ndjson' },
      });
    }

    return HttpResponse.json({
      data: {
        orderId,
        suggestions: mockDb.suggestionsFor(orderId),
        generatedAt: new Date().toISOString(),
      },
    });
  }),

  http.post(`${base}/ai/orders/:orderId/suggestions/retry`, async ({ params }) => {
    await withMockLatency();
    const failed = maybeFail();
    if (failed) return failed;

    const orderId = String(params['orderId']);
    const order = mockDb.getOrder(orderId);
    if (!order) {
      return HttpResponse.json({ message: 'Order not found' }, { status: 404 });
    }

    return HttpResponse.json({
      data: {
        orderId,
        suggestions: mockDb.suggestionsFor(orderId),
        generatedAt: new Date().toISOString(),
      },
    });
  }),
];
