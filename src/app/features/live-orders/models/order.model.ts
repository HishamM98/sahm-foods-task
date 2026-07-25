import { OrderChannel as ApiOrderChannel, OrderStatus } from '../../../core/models/api.types';

export type OrderColumnId =
  | 'received'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'completed';

export type OrderChannel = ApiOrderChannel;

export type OrderMetaTone = 'default' | 'accent' | 'danger' | 'success';

export interface OrderStatusMeta {
  labelKey: string;
  icon: string;
  tone: OrderMetaTone;
  pulse?: boolean;
  status?: OrderStatus;
}

export interface OrderAction {
  labelKey: string;
  kind: 'serve';
}

export interface Order {
  id: string;
  number: string;
  channel: OrderChannel;
  itemCount?: number;
  summaryKey?: string;
  summaryParams?: Record<string, string | number>;
  elapsedSeconds?: number;
  elapsedIcon?: string;
  elapsedTone?: OrderMetaTone;
  status?: OrderStatusMeta;
  action?: OrderAction;
  dimmed?: boolean;
}

export interface OrderColumn {
  id: OrderColumnId;
  titleKey: string;
  accent: string;
  orders: Order[];
  skeletonCount: number;
}
