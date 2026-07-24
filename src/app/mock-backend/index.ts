/**
 * Mock backend public barrel — seed datasets + reset helpers for features/tests.
 */
export { resetMockDb, mockDb } from './data/db';
export { ORDERS_SEED } from './data/orders.seed';
export { PRODUCTS_SEED, PRODUCT_CATEGORIES } from './data/products.seed';
export { KITCHEN_LOAD_SEED } from './data/kitchen.seed';
export { AI_SUGGESTIONS_SEED } from './data/ai-suggestions.seed';
export { fakeSocketServer } from './fake-socket-server';
export { startMockBackend } from './browser';
