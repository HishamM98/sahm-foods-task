import { KitchenLoadDto } from '../../core/models/api.types';

export const KITCHEN_LOAD_SEED: KitchenLoadDto = {
  level: 'high',
  percent: 72,
  activeTickets: 9,
  updatedAt: new Date().toISOString(),
};
