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
import { KitchenApiService } from '../../../core/api/kitchen-api.service';
import { ConnectivityService } from '../../../core/services/connectivity.service';
import { FakeSocketService } from '../../../core/services/fake-socket.service';
import { I18nService } from '../../../core/services/i18n.service';
import { KitchenLoadLevel } from '../../../core/models/api.types';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnInit {
  private readonly i18n = inject(I18nService);
  private readonly kitchenApi = inject(KitchenApiService);
  private readonly socket = inject(FakeSocketService);
  private readonly connectivity = inject(ConnectivityService);
  private readonly destroyRef = inject(DestroyRef);

  readonly loadPercent = signal(65);
  readonly loadLevel = signal<KitchenLoadLevel>('high');
  readonly lang = this.i18n.lang;
  readonly languageToggleLabel = computed(() => (this.lang() === 'ar' ? 'EN' : 'ع'));
  readonly isOnline = this.connectivity.isOnline;
  readonly loadLabelKey = computed(() => {
    switch (this.loadLevel()) {
      case 'critical':
        return 'HEADER.LOAD_CRITICAL';
      case 'high':
        return 'HEADER.LOAD_HIGH';
      case 'medium':
        return 'HEADER.LOAD_MEDIUM';
      default:
        return 'HEADER.LOAD_LOW';
    }
  });

  ngOnInit(): void {
    this.kitchenApi
      .getLoad()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (load) => {
          this.loadPercent.set(load.percent);
          this.loadLevel.set(load.level);
        },
      });

    this.socket
      .kitchenLoadUpdates()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((load) => {
        this.loadPercent.set(load.percent);
        this.loadLevel.set(load.level);
      });
  }

  toggleLanguage(): void {
    this.i18n.toggle();
  }
}
