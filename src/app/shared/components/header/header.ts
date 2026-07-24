import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly i18n = inject(I18nService);

  /** Matches the Figma load indicator fill (~65%). */
  readonly loadPercent = signal(65);
  readonly lang = this.i18n.lang;
  readonly languageToggleLabel = computed(() => (this.lang() === 'ar' ? 'EN' : 'ع'));

  toggleLanguage(): void {
    this.i18n.toggle();
  }
}
