import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly messageService = inject(MessageService);
  private readonly translateService = inject(TranslateService);

  info(message: string): void {
    this.messageService.add({ severity: 'info', summary: this.translateService.instant('TOAST.INFO'), detail: this.translateService.instant(message) });
  }

  addError(message: string): void {
    this.messageService.add({ severity: 'error', summary: this.translateService.instant('TOAST.ERROR'), detail: this.translateService.instant(message) });
  }

  addSuccess(message: string): void {
    this.messageService.add({ severity: 'success', summary: this.translateService.instant('TOAST.SUCCESS'), detail: this.translateService.instant(message) });
  }
}
