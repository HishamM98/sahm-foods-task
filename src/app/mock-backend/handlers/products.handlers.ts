import { http, HttpResponse } from 'msw';
import { mockBackendConfig } from '../config';
import { mockDb } from '../data/db';
import { PRODUCT_CATEGORIES } from '../data/products.seed';
import { maybeFail, withMockLatency } from '../utils/http-sim';

const base = mockBackendConfig.apiPrefix;

export const productsHandlers = [
  http.get(`${base}/products`, async ({ request }) => {
    await withMockLatency();
    const failed = maybeFail();
    if (failed) return failed;

    const url = new URL(request.url);
    const q = url.searchParams.get('q') ?? '';
    const category = url.searchParams.get('category') ?? undefined;
    const limit = Number(url.searchParams.get('limit') ?? '50');
    const offset = Number(url.searchParams.get('offset') ?? '0');

    const matched = mockDb.searchProducts(q, category);
    const page = matched.slice(offset, offset + limit);

    return HttpResponse.json({
      data: page,
      meta: {
        total: matched.length,
        limit,
        offset,
        categories: PRODUCT_CATEGORIES,
      },
    });
  }),

  http.get(`${base}/products/:id`, async ({ params }) => {
    await withMockLatency();
    const failed = maybeFail();
    if (failed) return failed;

    const product = mockDb.products.find((p) => p.id === String(params['id']));
    if (!product) {
      return HttpResponse.json({ message: 'Product not found' }, { status: 404 });
    }
    return HttpResponse.json({ data: product });
  }),
];
