import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'elapsedTime',
  standalone: true,
  pure: false, // Set to false if you want it to react immediately when language changes dynamically
})
export class ElapsedTimePipe implements PipeTransform {
  private readonly translate = inject(TranslateService);

  transform(value: number | null | undefined): string {
    if (value == null || isNaN(value)) {
      return '00:00';
    }

    const currentLang = this.translate.getCurrentLang() || 'ar';
    console.log(currentLang);
    const mins = Math.floor(value / 60);
    const secs = Math.floor(value % 60);

    const formatter = new Intl.NumberFormat(currentLang, { minimumIntegerDigits: 2 });
    const formattedMins = formatter.format(mins);
    const formattedSecs = formatter.format(secs);

    return `${formattedMins}:${formattedSecs}`;
  }
}