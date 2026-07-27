export type ImpactPriority = 'high' | 'medium' | 'low';
export type WaitTrend = 'delay' | 'stable' | 'early';
export type StaffStation = 'prep' | 'grill' | 'expo' | 'open';

export interface ScheduleLane {
  id: string;
  labelKey: string;
  waitKey: string;
  waitTone: 'error' | 'tertiary' | 'primary';
  /** 0–100 fill width */
  progress: number;
}

export interface StationStatus {
  id: string;
  labelKey: string;
  valueKey: string;
  icon: string;
}

export interface ImpactedOrder {
  id: string;
  number: string;
  priority: ImpactPriority;
  priorityKey: string;
  items: string;
  elapsed: string;
  elapsedTone: 'error' | 'default';
  trend: WaitTrend;
  trendKey: string;
  trendIcon: string;
  actionKey: string;
  actionTone: 'primary' | 'muted';
}

export interface StaffMember {
  id: string;
  name: string;
  stationKey: string;
  station: StaffStation;
  avatar?: string;
  assignSlot?: boolean;
}
