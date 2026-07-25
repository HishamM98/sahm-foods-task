import {
  AiSuggestionDto,
  KitchenLoadDto,
  KitchenLoadLevel,
  OrderChannel,
  OrderCustomerDto,
  OrderDto,
  OrderStatus,
  ProductDto,
} from '../../core/models/api.types';
import { AI_SUGGESTIONS_SEED } from './ai-suggestions.seed';
import { CUSTOMERS_SEED } from './customers.seed';
import { ORDERS_SEED } from './orders.seed';
import { PRODUCTS_SEED } from './products.seed';

function clone<T>(value: T): T {
  return structuredClone(value);
}

/**
 * Mutable in-memory database shared by MSW handlers and the fake socket server.
 * Resettable for tests via `resetMockDb()`.
 */
class MockDb {
  orders: OrderDto[] = clone(ORDERS_SEED);
  products: ProductDto[] = clone(PRODUCTS_SEED);
  aiByOrderId: Record<string, AiSuggestionDto[]> = clone(AI_SUGGESTIONS_SEED);
  customers: OrderCustomerDto[] = clone(CUSTOMERS_SEED);

  reset(): void {
    this.orders = clone(ORDERS_SEED);
    this.products = clone(PRODUCTS_SEED);
    this.aiByOrderId = clone(AI_SUGGESTIONS_SEED);
    this.customers = clone(CUSTOMERS_SEED);
  }

  addOrder(): OrderDto {
    const customer = this.customers[Math.floor(Math.random() * this.customers.length)];
    const randomId = Math.floor(Math.random() * 5000).toString();
    const channels: OrderChannel[] = ['walk-in', 'delivery', 'online'];
    const shuffledProducts = [...this.products].sort(() => Math.random() - 0.5);
    const numberOfItems = Math.floor(Math.random() * Math.min(5, shuffledProducts.length)) + 1; // 1-5 items

    const order: OrderDto = {
      id: randomId,
      number: `#${randomId}`,
      channel: channels[Math.floor(Math.random() * channels.length)],
      status: 'received',
      isNew: true,
      calling: false,
      delayed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: shuffledProducts.slice(0, numberOfItems).map((p) => ({
        productId: p.id,
        name: p.name,
        quantity: Math.floor(Math.random() * 10) + 1,
        unitPrice: p.price,
      })),
      elapsedSeconds: 0,
      customer,
      timeline: [],
    };

    this.orders.push(order);

    return clone(order);
  }

  listOrders(status?: OrderStatus): OrderDto[] {
    const list = status ? this.orders.filter((o) => o.status === status) : this.orders;
    return clone(list);
  }

  getOrder(id: string): OrderDto | undefined {
    const found = this.orders.find((o) => o.id === id);
    return found ? clone(found) : undefined;
  }

  updateOrderStatus(id: string, status: OrderStatus): OrderDto | undefined {
    const order = this.orders.find((o) => o.id === id);
    if (!order) {
      return undefined;
    }
    order.status = status;
    order.updatedAt = new Date().toISOString();
    order.isNew = status === 'received';
    order.calling = status === 'ready';
    if (status === 'completed') {
      order.closedAt = new Date().toISOString();
    }
    return clone(order);
  }

  bumpElapsed(): void {
    for (const order of this.orders) {
      if (order.status === 'completed') {
        continue;
      }
      order.elapsedSeconds += Math.floor(mockTickSeconds());
      order.updatedAt = new Date().toISOString();
    }
  }

  getKitchenLoad(): KitchenLoadDto {
    const kitchenLoadPercent = this.orders.filter((o) => o.status === 'preparing' || o.status === 'received').length / this.orders.length * 100;
    let kitchenLoad = {
      level: toLoadLevel(kitchenLoadPercent),
      percent: kitchenLoadPercent,
      activeTickets: this.orders.filter((o) =>
        o.status === 'received' || o.status === 'preparing' || o.status === 'ready',
      ).length,
      updatedAt: new Date().toISOString(),
    };
    return clone(kitchenLoad);
  }

  searchProducts(query: string, category?: string): ProductDto[] {
    const q = query.trim().toLowerCase();
    return clone(
      this.products.filter((p) => {
        const matchesCategory = category ? p.category === category : true;
        if (!matchesCategory) {
          return false;
        }
        if (!q) {
          return true;
        }
        return (
          p.name.toLowerCase().includes(q) ||
          p.nameAr.includes(query.trim()) ||
          p.sku.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      }),
    );
  }

  suggestionsFor(orderId: string): AiSuggestionDto[] {
    const existing = this.aiByOrderId[orderId];
    if (existing?.length) {
      return clone(existing);
    }
    return clone([
      {
        id: `ai-${orderId}-fallback`,
        type: 'upsell',
        severity: 'info',
        title: 'No specific insight',
        message: 'Ticket looks standard. Monitor prep time and confirm allergens verbally.',
      },
    ]);
  }
}

function toLoadLevel(percent: number): KitchenLoadLevel {
  if (percent >= 90) return 'critical';
  if (percent >= 70) return 'high';
  if (percent >= 40) return 'medium';
  return 'low';
}

function mockTickSeconds(): number {
  return 3 + Math.floor(Math.random() * 5);
}

export const mockDb = new MockDb();

export function resetMockDb(): void {
  mockDb.reset();
}