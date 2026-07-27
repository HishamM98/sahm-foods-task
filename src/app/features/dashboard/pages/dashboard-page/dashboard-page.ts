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
import {
  IMPACTED_ORDERS,
  SCHEDULE_LANES,
  STAFF_MEMBERS,
  STATION_STATUSES,
} from '../../data/dashboard.seed';

import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import type { EChartsCoreOption } from 'echarts/core';

echarts.use([GaugeChart, CanvasRenderer]);

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
  readonly scheduleLanes = SCHEDULE_LANES;
  readonly stationStatuses = STATION_STATUSES;
  readonly impactedOrders = IMPACTED_ORDERS;
  readonly staffMembers = STAFF_MEMBERS;

  readonly loadPercent = signal(85);
  readonly loadLevel = signal<KitchenLoadLevel>('critical');
  readonly activeTickets = signal(24);
  readonly avgDwellSeconds = signal(0);
  readonly avgDwell = computed(() => {
    return this.avgDwellSeconds() > 0 ? `${Math.floor(this.avgDwellSeconds() / 60)}m` : 'N/A';
  });
  readonly lastUpdateSeconds = signal(10);

  readonly loadLabelKey = computed(() => {
    switch (this.loadLevel()) {
      case 'critical':
        return 'DASHBOARD.GAUGE.CRITICAL';
      case 'high':
        return 'DASHBOARD.GAUGE.HEAVY';
      case 'medium':
        return 'DASHBOARD.GAUGE.MEDIUM';
      default:
        return 'DASHBOARD.GAUGE.LIGHT';
    }
  });

  readonly systemStatusKey = computed(() => {
    switch (this.loadLevel()) {
      case 'critical':
        return 'DASHBOARD.GAUGE.SYSTEM_CRITICAL';
      case 'high':
        return 'DASHBOARD.GAUGE.SYSTEM_HIGH';
      case 'medium':
        return 'DASHBOARD.GAUGE.SYSTEM_MEDIUM';
      default:
        return 'DASHBOARD.GAUGE.SYSTEM_LOW';
    }
  });

  private readonly colorMap: Record<KitchenLoadLevel, string> = {
    critical: '#ef4444', // red
    high: '#f97316',     // orange
    medium: '#eab308',   // yellow
    low: '#22c55e',    // green
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
            itemStyle: {
              color: levelColor,
            },
          },
          axisLine: {
            lineStyle: {
              width: 14,
              color: [[1, 'rgba(255, 255, 255, 0.08)']],
            },
          },
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          data: [
            {
              id: 'load-gauge-value',
              value: this.loadPercent(),
              name: levelLabel,
            },
          ],
          title: {
            fontSize: 12,
            offsetCenter: [0, '20%'],
            color: '#9ca3af',
          },
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
    this.kitchenApi
      .getLoad()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (load) => this.applyLoad(load),
      });

    this.socket
      .kitchenLoadUpdates()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((load) => this.applyLoad(load));
  }

  private applyLoad(load: KitchenLoadDto): void {
    this.loadPercent.set(load.percent);
    this.loadLevel.set(load.level);
    this.activeTickets.set(load.activeTickets);
    this.avgDwellSeconds.set(load.avgDwellSeconds);
    this.lastUpdateSeconds.set(0);
  }
}
