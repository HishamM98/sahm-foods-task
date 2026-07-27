import {
  ImpactedOrder,
  ScheduleLane,
  StaffMember,
  StationStatus,
} from '../models/dashboard.model';

export const SCHEDULE_LANES: ScheduleLane[] = [
  {
    id: 'expedited',
    labelKey: 'DASHBOARD.SCHEDULE.EXPEDITED',
    waitKey: 'DASHBOARD.SCHEDULE.WAIT_12M',
    waitTone: 'error',
    progress: 90,
  },
  {
    id: 'dine-in',
    labelKey: 'DASHBOARD.SCHEDULE.DINE_IN',
    waitKey: 'DASHBOARD.SCHEDULE.WAIT_22M',
    waitTone: 'tertiary',
    progress: 65,
  },
  {
    id: 'preorders',
    labelKey: 'DASHBOARD.SCHEDULE.PREORDERS',
    waitKey: 'DASHBOARD.SCHEDULE.ON_TRACK',
    waitTone: 'primary',
    progress: 30,
  },
];

export const STATION_STATUSES: StationStatus[] = [
  {
    id: 'ops-01',
    labelKey: 'DASHBOARD.STATUS.KITCHEN_OPS',
    valueKey: 'DASHBOARD.STATUS.OPERATIONAL',
    icon: 'assets/dashboard/icons/check.svg',
  },
  {
    id: 'station-02',
    labelKey: 'DASHBOARD.STATUS.STATION_02',
    valueKey: 'DASHBOARD.STATUS.BOTTLENECK',
    icon: 'assets/dashboard/icons/warning.svg',
  },
  {
    id: 'staff',
    labelKey: 'DASHBOARD.STATUS.TOTAL_STAFF',
    valueKey: 'DASHBOARD.STATUS.STAFF_ACTIVE',
    icon: 'assets/dashboard/icons/staff.svg',
  },
];

export const IMPACTED_ORDERS: ImpactedOrder[] = [
  {
    id: '29402',
    number: '#29402',
    priority: 'high',
    priorityKey: 'DASHBOARD.PRIORITY.HIGH',
    items: '4x Burger, 2x Shake, 3x Fries',
    elapsed: '24m 12s',
    elapsedTone: 'error',
    trend: 'delay',
    trendKey: 'DASHBOARD.TREND.DELAY',
    trendIcon: 'assets/dashboard/icons/trend-up.svg',
    actionKey: 'DASHBOARD.ACTIONS.BUMP',
    actionTone: 'primary',
  },
  {
    id: '29408',
    number: '#29408',
    priority: 'medium',
    priorityKey: 'DASHBOARD.PRIORITY.MEDIUM',
    items: '1x Pizza L, 1x Coke',
    elapsed: '12m 45s',
    elapsedTone: 'default',
    trend: 'stable',
    trendKey: 'DASHBOARD.TREND.STABLE',
    trendIcon: 'assets/dashboard/icons/trend-stable.svg',
    actionKey: 'DASHBOARD.ACTIONS.VIEW',
    actionTone: 'muted',
  },
  {
    id: '29415',
    number: '#29415',
    priority: 'low',
    priorityKey: 'DASHBOARD.PRIORITY.LOW',
    items: '2x Salad, 2x Water',
    elapsed: '06m 18s',
    elapsedTone: 'default',
    trend: 'early',
    trendKey: 'DASHBOARD.TREND.EARLY',
    trendIcon: 'assets/dashboard/icons/trend-down.svg',
    actionKey: 'DASHBOARD.ACTIONS.VIEW',
    actionTone: 'muted',
  },
];

export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: 'alex',
    name: 'Alex M.',
    stationKey: 'DASHBOARD.STAFF.PREP_1',
    station: 'prep',
    avatar: 'assets/dashboard/avatars/alex.jpg',
  },
  {
    id: 'sara',
    name: 'Sara J.',
    stationKey: 'DASHBOARD.STAFF.PREP_2',
    station: 'prep',
    avatar: 'assets/dashboard/avatars/sara.jpg',
  },
  {
    id: 'dave',
    name: 'Dave R.',
    stationKey: 'DASHBOARD.STAFF.GRILL_1',
    station: 'grill',
    avatar: 'assets/dashboard/avatars/dave.jpg',
  },
  {
    id: 'elena',
    name: 'Elena K.',
    stationKey: 'DASHBOARD.STAFF.EXPO',
    station: 'expo',
    avatar: 'assets/dashboard/avatars/elena.jpg',
  },
  {
    id: 'assign',
    name: 'Assign',
    stationKey: 'DASHBOARD.STAFF.OPEN',
    station: 'open',
    assignSlot: true,
  },
];
