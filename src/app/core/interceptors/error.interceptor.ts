import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ToastService } from '../../shared/services/toast.service';
import { inject } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    retry(1),
    catchError((error: HttpErrorResponse) => {
      const toast = inject(ToastService);
      toast.addError(error.message);
      return throwError(() => error);
    })
  );
};
