import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

interface SidebarNavItem {
  id: string;
  labelKey: string;
  icon: string;
  route: string;
}

interface SidebarActionItem {
  id: string;
  labelKey: string;
  icon: string;
  tone?: 'danger';
}

@Component({
  selector: 'app-sidebar',
  imports: [TranslatePipe, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  readonly navItems: readonly SidebarNavItem[] = [
    {
      id: 'dashboard',
      labelKey: 'SIDEBAR.DASHBOARD',
      icon: 'fa-solid fa-table-cells',
      route: '/dashboard',
    },
    {
      id: 'live-orders',
      labelKey: 'SIDEBAR.LIVE_ORDERS',
      icon: 'fa-solid fa-receipt',
      route: '/live-orders',
    },
    {
      id: 'menu',
      labelKey: 'SIDEBAR.MENU',
      icon: 'fa-solid fa-utensils',
      route: '/menu',
    },
    {
      id: 'history',
      labelKey: 'SIDEBAR.HISTORY',
      icon: 'fa-solid fa-clock-rotate-left',
      route: '/history',
    },
    {
      id: 'settings',
      labelKey: 'SIDEBAR.SETTINGS',
      icon: 'fa-solid fa-gear',
      route: '/settings',
    },
  ];

  readonly footerItems: readonly SidebarActionItem[] = [
    {
      id: 'help',
      labelKey: 'SIDEBAR.HELP',
      icon: 'fa-regular fa-circle-question',
    },
    {
      id: 'logout',
      labelKey: 'SIDEBAR.LOGOUT',
      icon: 'fa-solid fa-right-from-bracket',
      tone: 'danger',
    },
  ];
}
