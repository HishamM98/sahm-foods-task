import { Routes } from '@angular/router';
import { DashboardPage } from './features/dashboard/pages/dashboard-page/dashboard-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'live-orders',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPage,
  },
  {
    path: 'live-orders',
    component: DashboardPage,
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
    redirectTo: 'live-orders',
  },
];
