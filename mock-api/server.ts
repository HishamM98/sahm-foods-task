import cors from 'cors';
import express, { type Request, type Response, type NextFunction } from 'express';
import { environment } from '../src/environments/environment';
import { mockDb } from '../src/app/mock-backend/data/db';
import { PRODUCT_CATEGORIES } from '../src/app/mock-backend/data/products.seed';
import { AI_STREAM_CHUNKS } from '../src/app/mock-backend/data/ai-suggestions.seed';
import type { OrderStatus } from '../src/app/core/models/api.types';

const PORT = Number(process.env['MOCK_API_PORT'] ?? 3333);

const app = express();
app.use(cors());
app.use(express.json());

async function simulateNetwork(req: Request, res: Response, next: NextFunction): Promise<void> {
  const jitter = Math.floor(Math.random() * 180);
  await new Promise((resolve) => setTimeout(resolve, environment.mock.latencyMs + jitter));

  if (Math.random() < environment.mock.failureRate) {
    res.status(503).json({
      message: 'Simulated upstream failure',
      code: 'MOCK_TRANSIENT_ERROR',
    });
    return;
  }

  next();
}

app.use('/api', simulateNetwork);

app.get('/api/orders', (req, res) => {
  const status = req.query['status'] as OrderStatus | undefined;
  res.json({ data: mockDb.listOrders(status) });
});

app.get('/api/orders/:id', (req, res) => {
  const order = mockDb.getOrder(req.params['id']);
  if (!order) {
    res.status(404).json({ message: 'Order not found' });
    return;
  }
  res.json({ data: order });
});

app.patch('/api/orders/:id/status', (req, res) => {
  const status = req.body?.status as OrderStatus | undefined;
  if (!status) {
    res.status(400).json({ message: 'status is required' });
    return;
  }
  const updated = mockDb.updateOrderStatus(req.params['id'], status);
  if (!updated) {
    res.status(404).json({ message: 'Order not found' });
    return;
  }
  res.json({ data: updated });
});

app.get('/api/products', (req, res) => {
  const q = String(req.query['q'] ?? '');
  const category = req.query['category'] ? String(req.query['category']) : undefined;
  const limit = Number(req.query['limit'] ?? 50);
  const offset = Number(req.query['offset'] ?? 0);
  const matched = mockDb.searchProducts(q, category);
  res.json({
    data: matched.slice(offset, offset + limit),
    meta: {
      total: matched.length,
      limit,
      offset,
      categories: PRODUCT_CATEGORIES,
    },
  });
});

app.get('/api/products/:id', (req, res) => {
  const product = mockDb.products.find((p) => p.id === req.params['id']);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }
  res.json({ data: product });
});

app.get('/api/kitchen/load', (_req, res) => {
  res.json({ data: mockDb.kitchenLoad });
});

app.put('/api/kitchen/load', (req, res) => {
  const percent = req.body?.percent;
  if (typeof percent !== 'number') {
    res.status(400).json({ message: 'percent is required' });
    return;
  }
  const load = mockDb.setKitchenLoad(Math.min(100, Math.max(0, percent)));
  res.json({ data: load });
});

app.get('/api/ai/orders/:orderId/suggestions', async (req, res) => {
  const orderId = req.params['orderId'];
  const order = mockDb.getOrder(orderId);
  if (!order) {
    res.status(404).json({ message: 'Order not found' });
    return;
  }

  const suggestions = mockDb.suggestionsFor(orderId);
  if (req.query['stream'] === 'true') {
    res.setHeader('Content-Type', 'application/x-ndjson');
    for (const text of AI_STREAM_CHUNKS) {
      res.write(`${JSON.stringify({ type: 'chunk', text })}\n`);
      await new Promise((resolve) => setTimeout(resolve, 350));
    }
    res.write(
      `${JSON.stringify({
        type: 'complete',
        data: {
          orderId,
          suggestions,
          generatedAt: new Date().toISOString(),
        },
      })}\n`,
    );
    res.end();
    return;
  }

  res.json({
    data: {
      orderId,
      suggestions,
      generatedAt: new Date().toISOString(),
    },
  });
});

app.post('/api/ai/orders/:orderId/suggestions/retry', (req, res) => {
  const orderId = req.params['orderId'];
  const order = mockDb.getOrder(orderId);
  if (!order) {
    res.status(404).json({ message: 'Order not found' });
    return;
  }
  res.json({
    data: {
      orderId,
      suggestions: mockDb.suggestionsFor(orderId),
      generatedAt: new Date().toISOString(),
    },
  });
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'sahm-mock-api' });
});

app.listen(PORT, () => {
  console.log(`Sahm mock API listening on http://localhost:${PORT}`);
  console.log(`Example: http://localhost:${PORT}/api/orders`);
});
