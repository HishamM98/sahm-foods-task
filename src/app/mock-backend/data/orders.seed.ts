import { OrderDto } from '../../core/models/api.types';

const now = Date.now();

function minutesAgo(minutes: number): string {
  return new Date(now - minutes * 60_000).toISOString();
}

/** Seed orders aligned with the Live Orders Figma board. */
export const ORDERS_SEED: OrderDto[] = [
  {
    id: '2841',
    number: '#2841',
    channel: 'delivery',
    status: 'received',
    items: [
      { productId: 'p-burger-classic', name: 'Classic Burger', quantity: 2 },
      { productId: 'p-fries-reg', name: 'Fries', quantity: 1 },
      { productId: 'p-cola', name: 'Cola', quantity: 1 },
    ],
    createdAt: minutesAgo(8),
    updatedAt: minutesAgo(8),
    elapsedSeconds: 8 * 60 + 24,
    delayed: false,
    isNew: true,
    calling: false,
  },
  {
    id: '2845',
    number: '#2845',
    channel: 'walk-in',
    status: 'received',
    items: [{ productId: 'p-shawarma', name: 'Chicken Shawarma', quantity: 1 }],
    createdAt: minutesAgo(2),
    updatedAt: minutesAgo(2),
    elapsedSeconds: 2 * 60 + 10,
    delayed: false,
    isNew: true,
    calling: false,
  },
  {
    id: '2838',
    number: '#2838',
    channel: 'online',
    status: 'preparing',
    items: [
      { productId: 'p-pizza-marg', name: 'Margherita Pizza', quantity: 3 },
      { productId: 'p-salad-greek', name: 'Greek Salad', quantity: 2 },
      { productId: 'p-garlic-bread', name: 'Garlic Bread', quantity: 4 },
      { productId: 'p-water', name: 'Water', quantity: 3 },
    ],
    createdAt: minutesAgo(22),
    updatedAt: minutesAgo(15),
    elapsedSeconds: 22 * 60 + 45,
    delayed: true,
    isNew: false,
    calling: false,
  },
  {
    id: '2840',
    number: '#2840',
    channel: 'walk-in',
    status: 'ready',
    items: [
      { productId: 'p-burger-classic', name: 'Classic Burger', quantity: 1 },
      { productId: 'p-fries-reg', name: 'Fries', quantity: 1 },
    ],
    createdAt: minutesAgo(12),
    updatedAt: minutesAgo(1),
    elapsedSeconds: 12 * 60,
    delayed: false,
    isNew: false,
    calling: true,
  },
  {
    id: '2835',
    number: '#2835',
    channel: 'delivery',
    status: 'delivered',
    items: [
      { productId: 'p-pizza-marg', name: 'Margherita Pizza', quantity: 2 },
      { productId: 'p-cola', name: 'Cola', quantity: 4 },
    ],
    createdAt: minutesAgo(40),
    updatedAt: minutesAgo(5),
    elapsedSeconds: 40 * 60,
    delayed: false,
    isNew: false,
    calling: false,
  },
  {
    id: '2830',
    number: '#2830',
    channel: 'walk-in',
    status: 'completed',
    items: [{ productId: 'p-shawarma', name: 'Chicken Shawarma', quantity: 2 }],
    createdAt: minutesAgo(50),
    updatedAt: minutesAgo(14),
    elapsedSeconds: 50 * 60,
    delayed: false,
    isNew: false,
    calling: false,
    closedAt: minutesAgo(14),
  },
];
