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
import { TranslatePipe } from '@ngx-translate/core';
import { KitchenApiService } from '../../../../core/api/kitchen-api.service';
import { FakeSocketService } from '../../../../core/services/fake-socket.service';
import { KitchenLoadDto, KitchenLoadLevel } from '../../../../core/models/api.types';
import {
  IMPACTED_ORDERS,
  SCHEDULE_LANES,
  STAFF_MEMBERS,
  STATION_STATUSES,
} from '../../data/dashboard.seed';

/** Circumference of the gauge ring (r = 80). */
const GAUGE_CIRCUMFERENCE = 2 * Math.PI * 80;

@Component({
  selector: 'app-dashboard-page',
  imports: [TranslatePipe],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage implements OnInit {
  private readonly kitchenApi = inject(KitchenApiService);
  private readonly socket = inject(FakeSocketService);
  private readonly destroyRef = inject(DestroyRef);

  readonly scheduleLanes = SCHEDULE_LANES;
  readonly stationStatuses = STATION_STATUSES;
  readonly impactedOrders = IMPACTED_ORDERS;
  readonly staffMembers = STAFF_MEMBERS;
  readonly gaugeCircumference = GAUGE_CIRCUMFERENCE;

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

  readonly gaugeOffset = computed(() => {
    const pct = Math.min(100, Math.max(0, this.loadPercent()));
    return GAUGE_CIRCUMFERENCE * (1 - pct / 100);
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
