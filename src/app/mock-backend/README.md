# Mock backend

Two layers expose the same seed data / in-memory DB:

| Layer | Who uses it | How to run |
|-------|-------------|------------|
| **MSW** (browser service worker) | Angular `HttpClient` inside the app | `npm start` (auto-starts with the app) |
| **Express mock API** | Postman / curl / external clients | `npm run mock:api` → `http://localhost:3333` |

MSW only intercepts requests **from the browser**. Hitting `http://localhost:4200/api/...` from Postman bypasses MSW and the Vite SPA fallback returns `index.html` — that is expected.

## Layout

```
mock-backend/               # browser MSW + fake socket
mock-api/
  server.ts                 # Express REST server for Postman
  Sahm-Food-Mock-API.postman_collection.json
```

## Domains

| Area | REST | Socket events (browser only) |
|------|------|------------------------------|
| Live orders | `GET/PATCH /api/orders` | `order.updated` |
| Products | `GET /api/products` | — |
| Kitchen | `GET/PUT /api/kitchen/load` | `kitchen.load.changed` |
| AI assistant | `GET/POST /api/ai/orders/:id/suggestions` | — |

## Postman

1. Terminal A: `npm run mock:api`
2. Import `mock-api/Sahm-Food-Mock-API.postman_collection.json`
3. Call `http://localhost:3333/api/orders` (collection default port is `3333`)

Optional: keep `npm start` running in Terminal B for the UI (MSW still serves the app).
