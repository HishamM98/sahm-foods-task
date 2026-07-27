import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ToastService } from '../../shared/services/toast.service';
import { inject, Injector, runInInjectionContext } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const injector = inject(Injector);

  return next(req).pipe(
    retry({
      count: 1,
      delay: (error) => {
        if (!navigator.onLine || error.status === 0) throw error;
        return error;
      }
    }),
    catchError((error: HttpErrorResponse) => {
      const toast = runInInjectionContext(injector, () => inject(ToastService));

      if (!navigator.onLine || error.status === 0) {
        if (req.method !== 'GET') {
          toast.addWarning('You are offline. Action queued for sync.');
        }
      } else {
        toast.addError('Server error');
      }
      return throwError(() => error);
    })
  );
};
