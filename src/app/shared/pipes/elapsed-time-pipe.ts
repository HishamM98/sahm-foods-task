import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'elapsedTime',
  standalone: true,
  pure: false,
})
export class ElapsedTimePipe implements PipeTransform {
  private readonly translate = inject(TranslateService);

  transform(value: number | null | undefined): string {
    if (value == null || isNaN(value)) {
      return '00:00:00';
    }

    const currentLang = this.translate.getCurrentLang() || 'ar';
    const hours = Math.floor(value / 3600);
    const mins = Math.floor((value % 3600) / 60);
    const secs = Math.floor(value % 60);

    const formatter = new Intl.NumberFormat(currentLang, { minimumIntegerDigits: 2 });
    const formattedHours = formatter.format(hours);
    const formattedMins = formatter.format(mins);
    const formattedSecs = formatter.format(secs);

    return `${formattedHours}:${formattedMins}:${formattedSecs}`;
  }
}