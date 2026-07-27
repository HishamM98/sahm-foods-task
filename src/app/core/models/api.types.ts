export type OrderChannel = 'walk-in' | 'delivery' | 'online';

export type OrderStatus =
  | 'received'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'completed';

export type KitchenLoadLevel = 'low' | 'medium' | 'high' | 'critical';

export type AiSuggestionType =
  | 'upsell'
  | 'allergy'
  | 'missing-info'
  | 'delivery-risk'
  | 'kitchen-overload';

export interface OrderItemDto {
  productId: string;
  name: string;
  quantity: number;
  notes?: string;
  unitPrice: number;
}

export interface OrderCustomerDto {
  name: string;
  phone: string;
  addressLine1?: string;
  addressLine2?: string;
}

export interface OrderTimelineEventDto {
  /** i18n key under ORDER_DETAILS.TIMELINE.* */
  labelKey: string;
  at?: string;
  inProgress?: boolean;
}

export interface OrderDto {
  id: string;
  number: string;
  channel: OrderChannel;
  status: OrderStatus;
  items: OrderItemDto[];
  customer: OrderCustomerDto;
  createdAt: string;
  updatedAt: string;
  etaAt?: string;
  elapsedSeconds: number;
  delayed: boolean;
  isNew: boolean;
  calling: boolean;
  closedAt?: string;
  timeline: OrderTimelineEventDto[];
}

export interface ProductDto {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  price: number;
  sku: string;
  tags: string[];
  available: boolean;
}

export interface KitchenLoadDto {
  level: KitchenLoadLevel;
  percent: number;
  activeTickets: number;
  avgDwellSeconds: number;
  updatedAt: string;
}

export interface AiSuggestionDto {
  id: string;
  type: AiSuggestionType;
  severity: 'info' | 'warning' | 'critical';
  title: string;
  message: string;
  /** Optional badge / CTA shown in the AI panel */
  tag?: string;
  actionLabel?: string;
  actionAmount?: number;
  showSecondaryAction?: boolean;
}

export interface AiSuggestionResponseDto {
  orderId: string;
  suggestions: AiSuggestionDto[];
  generatedAt: string;
}

/** Fake WebSocket event envelope. */
export type SocketEventType =
  | 'order.created'
  | 'order.updated'
  | 'kitchen.load.changed'
  | 'connection.heartbeat';

export interface SocketEvent<T = unknown> {
  type: SocketEventType;
  payload: T;
  at: string;
}
