import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ToastService } from '../../shared/services/toast.service';
import { inject } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);
  return next(req).pipe(
    retry(1),
    catchError((error: HttpErrorResponse) => {
      toast.addError(error.message);
      return throwError(() => error);
    })
  );
};
