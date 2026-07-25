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
}

export interface OrderDto {
  id: string;
  number: string;
  channel: OrderChannel;
  status: OrderStatus;
  items: OrderItemDto[];
  createdAt: string;
  updatedAt: string;
  elapsedSeconds: number;
  delayed: boolean;
  isNew: boolean;
  calling: boolean;
  closedAt?: string;
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
  updatedAt: string;
}

export interface AiSuggestionDto {
  id: string;
  type: AiSuggestionType;
  severity: 'info' | 'warning' | 'critical';
  title: string;
  message: string;
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
