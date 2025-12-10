import { Routes } from '@angular/router';
import { UserRoutersComponent } from './pages/user-routers/user-routers.component';
import { UserRoutersSalesComponent } from './pages/user-routers-sales/user-routers-sales.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'routers',
    pathMatch: 'full'
  },
  {
    path: 'routers',
    component: UserRoutersComponent,
  },
  {
    path: 'routers/:routerId',
    component: UserRoutersSalesComponent,
  },
];
