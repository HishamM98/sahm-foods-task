import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { KitchenApiService } from '../../../../core/api/kitchen-api.service';
import { FakeSocketService } from '../../../../core/services/fake-socket.service';
import { KitchenLoadDto, KitchenLoadLevel } from '../../../../core/models/api.types';
import { OrdersStore } from '../../../live-orders/stores/orders-store.service';
import { ChannelWaitStats, OrderChannel } from '../../../live-orders/models/order.model';
import { STAFF_MEMBERS, STATION_STATUSES } from '../../data/dashboard.seed';

import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import type { EChartsCoreOption } from 'echarts/core';
import { interval } from 'rxjs';

echarts.use([GaugeChart, CanvasRenderer]);

type WaitTone = 'error' | 'tertiary' | 'primary';

interface ScheduleLaneVM {
  id: string;
  labelKey: string;
  waitTone: WaitTone;
  progress: number;
  onTrack: boolean;
  waitMinutes: number;
}

interface QueueRowVM {
  id: string;
  number: string;
  priority: 'high' | 'medium' | 'low';
  priorityKey: string;
  items: string;
  elapsed: string;
  elapsedTone: 'error' | 'default';
  trend: 'delay' | 'stable' | 'early';
  trendIcon: string;
  trendKey: string;
  actionTone: 'primary' | 'default';
  actionKey: string;
}

@Component({
  selector: 'app-dashboard-page',
  imports: [TranslatePipe, NgxEchartsDirective],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  providers: [provideEchartsCore({ echarts })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage implements OnInit {
  private readonly kitchenApi = inject(KitchenApiService);
  private readonly socket = inject(FakeSocketService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly translate = inject(TranslateService);
  private readonly ordersStore = inject(OrdersStore);

  readonly stationStatuses = STATION_STATUSES;
  readonly staffMembers = STAFF_MEMBERS;

  readonly loadPercent = signal(85);
  readonly loadLevel = signal<KitchenLoadLevel>('critical');
  readonly lastUpdateSeconds = signal(10);

  readonly activeTickets = this.ordersStore.activeOrdersCount;
  readonly avgDwellSeconds = this.ordersStore.avgDwellSeconds;
  readonly avgDwell = computed(() =>
    this.avgDwellSeconds() > 0 ? `${Math.floor(this.avgDwellSeconds() / 60)}m` : 'N/A'
  );

  private readonly channelTargetSeconds: Partial<Record<OrderChannel, number>> = {
    delivery: 15 * 60,
    'walk-in': 25 * 60,
    online: 45 * 60,
  };

  private readonly channelLabelKeys: Partial<Record<OrderChannel, string>> = {
    delivery: 'DASHBOARD.SCHEDULE.LANE_DELIVERY',
    'walk-in': 'DASHBOARD.SCHEDULE.LANE_WALK_IN',
    online: 'DASHBOARD.SCHEDULE.LANE_ONLINE',
  };

  readonly scheduleLanes = computed<ScheduleLaneVM[]>(() =>
    this.ordersStore
      .channelWaitStats()
      .map((stat) => this.toScheduleLaneVM(stat))
  );

  readonly impactedOrders = computed<QueueRowVM[]>(() =>
    this.ordersStore
      .delayedOrders()
      .map((order) => ({
        id: order.id,
        number: order.number,
        priority: this.priorityFor(order.elapsedSeconds),
        priorityKey: `DASHBOARD.QUEUE.PRIORITY.${this.priorityFor(order.elapsedSeconds).toUpperCase()}`,
        items: this.translate.instant('DASHBOARD.QUEUE.ITEMS_COUNT', {
          count: order.items.length,
        }),
        elapsed: this.formatMinutes(order.elapsedSeconds),
        elapsedTone: 'error' as const,
        trend: 'delay' as const,
        trendIcon: 'assets/dashboard/icons/trend-up.svg',
        trendKey: 'DASHBOARD.QUEUE.TREND.DELAY',
        actionTone: 'primary' as const,
        actionKey: 'DASHBOARD.QUEUE.ACTION_VIEW',
      }))
  );

  readonly loadLabelKey = computed(() => {
    switch (this.loadLevel()) {
      case 'critical': return 'DASHBOARD.GAUGE.CRITICAL';
      case 'high': return 'DASHBOARD.GAUGE.HEAVY';
      case 'medium': return 'DASHBOARD.GAUGE.MEDIUM';
      default: return 'DASHBOARD.GAUGE.LIGHT';
    }
  });

  readonly systemStatusKey = computed(() => {
    switch (this.loadLevel()) {
      case 'critical': return 'DASHBOARD.GAUGE.SYSTEM_CRITICAL';
      case 'high': return 'DASHBOARD.GAUGE.SYSTEM_HIGH';
      case 'medium': return 'DASHBOARD.GAUGE.SYSTEM_MEDIUM';
      default: return 'DASHBOARD.GAUGE.SYSTEM_LOW';
    }
  });

  private readonly colorMap: Record<KitchenLoadLevel, string> = {
    critical: '#ef4444',
    high: '#f97316',
    medium: '#eab308',
    low: '#22c55e',
  };

  readonly chartOption = computed<EChartsCoreOption>(() => {
    const levelColor = this.colorMap[this.loadLevel()] ?? '#22c55e';
    const levelLabel = this.translate.instant(this.loadLabelKey());

    return {
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: { show: false },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: { color: levelColor },
          },
          axisLine: {
            lineStyle: { width: 14, color: [[1, 'rgba(255, 255, 255, 0.08)']] },
          },
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          data: [{ id: 'load-gauge-value', value: this.loadPercent(), name: levelLabel }],
          title: { fontSize: 12, offsetCenter: [0, '20%'], color: '#9ca3af' },
          detail: {
            width: '60%',
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, '-10%'],
            fontSize: 28,
            fontWeight: 'bolder',
            formatter: '{value}%',
            color: '#fff',
          },
        },
      ],
    };
  });

  ngOnInit(): void {
    this.ordersStore.loadOrders();

    this.kitchenApi
      .getLoad()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({ next: (load) => this.applyLoad(load) });

    this.socket
      .kitchenLoadUpdates()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((load) => this.applyLoad(load));

    interval(1000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.incrementLastUpdateSeconds());
  }

  private incrementLastUpdateSeconds(): void {
    this.lastUpdateSeconds.update((seconds) => seconds + 1);
  }

  private applyLoad(load: KitchenLoadDto): void {
    this.loadPercent.set(load.percent);
    this.loadLevel.set(load.level);
    this.lastUpdateSeconds.set(0);
  }

  private toScheduleLaneVM(stat: ChannelWaitStats): ScheduleLaneVM {
    const targetSeconds = this.channelTargetSeconds[stat.channel];
    const onTrack = stat.onTrack && (targetSeconds == null || stat.avgWaitSeconds < targetSeconds * 0.7);
    const progress = targetSeconds
      ? Math.min(100, Math.round((stat.avgWaitSeconds / targetSeconds) * 100))
      : Math.min(100, Math.round((stat.avgWaitSeconds / (30 * 60)) * 100));

    let waitTone: WaitTone = 'primary';
    if (!onTrack) {
      waitTone = targetSeconds && stat.avgWaitSeconds >= targetSeconds ? 'error' : 'tertiary';
    }

    return {
      id: stat.channel,
      labelKey: this.channelLabelKeys[stat.channel] ?? 'DASHBOARD.SCHEDULE.LANE_OTHER',
      waitTone,
      progress,
      onTrack,
      waitMinutes: Math.round(stat.avgWaitSeconds / 60),
    };
  }

  private priorityFor(elapsedSeconds: number): 'high' | 'medium' | 'low' {
    if (elapsedSeconds >= 20 * 60) return 'high';
    if (elapsedSeconds >= 10 * 60) return 'medium';
    return 'low';
  }

  private formatMinutes(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }
}