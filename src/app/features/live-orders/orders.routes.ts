import { Routes } from '@angular/router';

export const ordersRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/live-orders-page/live-orders-page').then((m) => m.LiveOrdersPage),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
