import { OrderDto, OrderTimelineEventDto } from '../../core/models/api.types';

const now = Date.now();

function minutesAgo(minutes: number): string {
  return new Date(now - minutes * 60_000).toISOString();
}

function minutesFrom(baseIso: string, minutes: number): string {
  return new Date(new Date(baseIso).getTime() + minutes * 60_000).toISOString();
}

function timelineFor(
  status: OrderDto['status'],
  createdAt: string,
): OrderTimelineEventDto[] {
  const events: OrderTimelineEventDto[] = [
    {
      labelKey: 'ORDER_DETAILS.TIMELINE.RECEIVED',
      at: createdAt,
    },
  ];

  if (status === 'received') {
    events.push({
      labelKey: 'ORDER_DETAILS.TIMELINE.SENT_TO_KITCHEN',
      inProgress: true,
    });
    return events;
  }

  events.push({
    labelKey: 'ORDER_DETAILS.TIMELINE.SENT_TO_KITCHEN',
    at: minutesFrom(createdAt, 2),
  });

  if (status === 'preparing') {
    events.push({
      labelKey: 'ORDER_DETAILS.TIMELINE.PREPARING',
      inProgress: true,
    });
    return events;
  }

  events.push({
    labelKey: 'ORDER_DETAILS.TIMELINE.PREPARING',
    at: minutesFrom(createdAt, 5),
  });

  if (status === 'ready') {
    events.push({
      labelKey: 'ORDER_DETAILS.TIMELINE.READY',
      inProgress: true,
    });
    return events;
  }

  events.push({
    labelKey: 'ORDER_DETAILS.TIMELINE.READY',
    at: minutesFrom(createdAt, 18),
  });

  if (status === 'delivered') {
    events.push({
      labelKey: 'ORDER_DETAILS.TIMELINE.DELIVERED',
      inProgress: true,
    });
    return events;
  }

  events.push({
    labelKey: 'ORDER_DETAILS.TIMELINE.DELIVERED',
    at: minutesFrom(createdAt, 35),
  });
  events.push({
    labelKey: 'ORDER_DETAILS.TIMELINE.COMPLETED',
    at: minutesFrom(createdAt, 36),
  });
  return events;
}

/** Seed orders aligned with the Live Orders Figma board + order details modal. */
export const ORDERS_SEED: OrderDto[] = [
  {
    id: '2841',
    number: '#2841',
    channel: 'delivery',
    status: 'received',
    items: [
      {
        productId: 'p-burger-classic',
        name: 'Classic Burger',
        quantity: 2,
        notes: 'Medium Rare, No Onions',
        unitPrice: 16,
      },
      {
        productId: 'p-fries-reg',
        name: 'Truffle Fries',
        quantity: 1,
        notes: 'Extra Parmesan',
        unitPrice: 12.5,
      },
      {
        productId: 'p-salad-greek',
        name: 'Caesar Salad',
        quantity: 1,
        notes: 'Dressing on the side',
        unitPrice: 14,
      },
    ],
    customer: {
      name: 'Sarah Jenkins',
      phone: '+1 (555) 012-3456',
      addressLine1: '452 Tech Parkway, Suite 200',
      addressLine2: 'San Francisco, CA 94105',
    },
    createdAt: minutesAgo(8),
    updatedAt: minutesAgo(8),
    etaAt: minutesAgo(-25),
    elapsedSeconds: 8 * 60 + 24,
    delayed: false,
    isNew: true,
    calling: false,
    timeline: [],
  },
  {
    id: '2845',
    number: '#2845',
    channel: 'walk-in',
    status: 'received',
    items: [
      {
        productId: 'p-shawarma',
        name: 'Chicken Shawarma',
        quantity: 1,
        unitPrice: 12,
      },
    ],
    customer: {
      name: 'Omar Hassan',
      phone: '+20 100 555 0199',
    },
    createdAt: minutesAgo(2),
    updatedAt: minutesAgo(2),
    elapsedSeconds: 2 * 60 + 10,
    delayed: false,
    isNew: true,
    calling: false,
    timeline: [],
  },
  {
    id: '2838',
    number: '#2838',
    channel: 'online',
    status: 'preparing',
    items: [
      {
        productId: 'p-pizza-marg',
        name: 'Margherita Pizza',
        quantity: 3,
        unitPrice: 18,
      },
      {
        productId: 'p-salad-greek',
        name: 'Greek Salad',
        quantity: 2,
        unitPrice: 11,
      },
      {
        productId: 'p-garlic-bread',
        name: 'Garlic Bread',
        quantity: 4,
        unitPrice: 6,
      },
      {
        productId: 'p-water',
        name: 'Water',
        quantity: 3,
        unitPrice: 2,
      },
    ],
    customer: {
      name: 'Layla Mansour',
      phone: '+20 122 444 8800',
      addressLine1: '12 Nile Corniche',
      addressLine2: 'Cairo, Egypt',
    },
    createdAt: minutesAgo(22),
    updatedAt: minutesAgo(15),
    etaAt: minutesAgo(-8),
    elapsedSeconds: 22 * 60 + 45,
    delayed: true,
    isNew: false,
    calling: false,
    timeline: [],
  },
  {
    id: '2840',
    number: '#2840',
    channel: 'walk-in',
    status: 'ready',
    items: [
      {
        productId: 'p-burger-classic',
        name: 'Classic Burger',
        quantity: 1,
        unitPrice: 16,
      },
      {
        productId: 'p-fries-reg',
        name: 'Fries',
        quantity: 1,
        unitPrice: 6,
      },
    ],
    customer: {
      name: 'Nora Adel',
      phone: '+20 101 222 3344',
    },
    createdAt: minutesAgo(12),
    updatedAt: minutesAgo(1),
    elapsedSeconds: 12 * 60,
    delayed: false,
    isNew: false,
    calling: true,
    timeline: [],
  },
  {
    id: '2835',
    number: '#2835',
    channel: 'delivery',
    status: 'delivered',
    items: [
      {
        productId: 'p-pizza-marg',
        name: 'Margherita Pizza',
        quantity: 2,
        unitPrice: 18,
      },
      {
        productId: 'p-cola',
        name: 'Cola',
        quantity: 4,
        unitPrice: 3,
      },
    ],
    customer: {
      name: 'James Carter',
      phone: '+1 (555) 987-6543',
      addressLine1: '88 Market Street',
      addressLine2: 'San Francisco, CA 94103',
    },
    createdAt: minutesAgo(40),
    updatedAt: minutesAgo(5),
    etaAt: minutesAgo(5),
    elapsedSeconds: 40 * 60,
    delayed: false,
    isNew: false,
    calling: false,
    timeline: [],
  },
  {
    id: '2830',
    number: '#2830',
    channel: 'walk-in',
    status: 'completed',
    items: [
      {
        productId: 'p-shawarma',
        name: 'Chicken Shawarma',
        quantity: 2,
        unitPrice: 12,
      },
    ],
    customer: {
      name: 'Mona Farid',
      phone: '+20 115 777 2211',
    },
    createdAt: minutesAgo(50),
    updatedAt: minutesAgo(14),
    elapsedSeconds: 50 * 60,
    delayed: false,
    isNew: false,
    calling: false,
    closedAt: minutesAgo(14),
    timeline: [],
  },
];

for (const order of ORDERS_SEED) {
  order.timeline = timelineFor(order.status, order.createdAt);
}
