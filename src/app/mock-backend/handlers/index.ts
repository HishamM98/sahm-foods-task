import { aiHandlers } from './ai.handlers';
import { kitchenHandlers } from './kitchen.handlers';
import { ordersHandlers } from './orders.handlers';
import { productsHandlers } from './products.handlers';

export const handlers = [
  ...ordersHandlers,
  ...productsHandlers,
  ...kitchenHandlers,
  ...aiHandlers,
];
