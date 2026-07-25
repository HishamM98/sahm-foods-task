import { OrderDto, OrderStatus } from '../../../core/models/api.types';
import { Order, OrderColumn, OrderColumnId } from '../models/order.model';

const COLUMN_META: Record<
  OrderColumnId,
  { titleKey: string; accent: string; skeletonCount: number; }
> = {
  received: {
    titleKey: 'LIVE_ORDERS.COLUMNS.RECEIVED',
    accent: 'var(--status-received)',
    skeletonCount: 0,
  },
  preparing: {
    titleKey: 'LIVE_ORDERS.COLUMNS.PREPARING',
    accent: 'var(--status-preparing)',
    skeletonCount: 2,
  },
  ready: {
    titleKey: 'LIVE_ORDERS.COLUMNS.READY',
    accent: 'var(--status-ready)',
    skeletonCount: 0,
  },
  delivered: {
    titleKey: 'LIVE_ORDERS.COLUMNS.DELIVERED',
    accent: 'var(--status-delivered)',
    skeletonCount: 0,
  },
  completed: {
    titleKey: 'LIVE_ORDERS.COLUMNS.COMPLETED',
    accent: 'var(--status-completed)',
    skeletonCount: 0,
  },
};

const COLUMN_ORDER: OrderColumnId[] = [
  'received',
  'preparing',
  'ready',
  'delivered',
  'completed',
];

export function formatElapsed(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}m`;
}

export function mapOrderDtoToCard(dto: OrderDto): Order {
  const itemCount = dto.items.reduce((sum, item) => sum + item.quantity, 0);
  const closedMinutes =
    dto.closedAt != null
      ? Math.max(1, Math.round((Date.now() - new Date(dto.closedAt).getTime()) / 60_000))
      : undefined;

  const card: Order = {
    id: dto.id,
    number: dto.number,
    channel: dto.channel,
    dimmed: dto.status === 'delivered' || dto.status === 'completed',
  };

  if (dto.status === 'completed' && closedMinutes != null) {
    card.summaryKey = 'LIVE_ORDERS.CLOSED_AGO';
    card.summaryParams = { minutes: closedMinutes };
    return card;
  }

  card.itemCount = itemCount;

  if (dto.status === 'received' || dto.status === 'preparing') {
    card.elapsedLabel = formatElapsed(dto.elapsedSeconds);
    card.elapsedIcon = dto.delayed
      ? 'fa-solid fa-triangle-exclamation'
      : 'fa-regular fa-clock';
    card.elapsedTone = dto.delayed ? 'danger' : 'default';
  }

  if (dto.isNew && dto.status === 'received') {
    card.status = {
      labelKey: 'LIVE_ORDERS.STATUS.NEW',
      icon: 'fa-solid fa-circle-check',
      tone: 'accent',
    };
  } else if (dto.delayed && dto.status === 'preparing') {
    card.status = {
      status: 'preparing',
      labelKey: 'LIVE_ORDERS.STATUS.DELAYED',
      icon: 'fa-solid fa-hourglass-half',
      tone: 'danger',
      pulse: true,
    };
  } else if (dto.calling && dto.status === 'ready') {
    card.status = {
      status: 'ready',
      labelKey: 'LIVE_ORDERS.STATUS.CALLING',
      icon: 'fa-solid fa-bell',
      tone: 'success',
    };
    card.action = {
      labelKey: 'LIVE_ORDERS.ACTIONS.SERVE',
      kind: 'serve',
    };
  } else if (dto.status === 'delivered') {
    card.status = {
      status: 'delivered',
      labelKey: 'LIVE_ORDERS.STATUS.PICKED_UP',
      icon: 'fa-solid fa-truck',
      tone: 'default',
    };
  }

  return card;
}

export function groupOrdersIntoColumns(orders: OrderDto[]): OrderColumn[] {
  const byStatus = new Map<OrderStatus, OrderDto[]>();
  for (const status of COLUMN_ORDER) {
    byStatus.set(status, []);
  }
  for (const order of orders) {
    byStatus.get(order.status)?.push(order);
  }

  return COLUMN_ORDER.map((id) => {
    const meta = COLUMN_META[id];
    return {
      id,
      titleKey: meta.titleKey,
      accent: meta.accent,
      skeletonCount: meta.skeletonCount,
      orders: (byStatus.get(id) ?? []).map(mapOrderDtoToCard),
    };
  });
}
