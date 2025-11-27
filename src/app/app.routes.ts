import { Routes } from '@angular/router';
import { DashboardRoutes } from './features/dashboard/dashboard.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        './features/dashboard/dashboard-layout/dashboard-layout.component'
      ).then((c) => c.DashboardLayoutComponent),
    children: DashboardRoutes,
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
];
