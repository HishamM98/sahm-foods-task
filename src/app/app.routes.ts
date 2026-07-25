import { Routes } from '@angular/router';
import { DashboardPage } from './features/dashboard/pages/dashboard-page/dashboard-page';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPage,
  },
  {
    path: 'live-orders',
    loadChildren: () =>
      import('./features/live-orders/orders.routes').then((m) => m.ordersRoutes),
  },
  {
    path: 'menu',
    component: DashboardPage,
  },
  {
    path: 'history',
    component: DashboardPage,
  },
  {
    path: 'settings',
    component: DashboardPage,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

const dialogRoutes: Routes = [
  {
    path: 'order/:id',
    outlet: 'modal',
    loadComponent: () =>
      import('./features/live-orders/pages/order-details/order-details-dialog').then(
        (m) => m.OrderDetailRouteComponent,
      ),
  },
];

export const routes: Routes = [
  ...appRoutes,
  ...dialogRoutes,
];
