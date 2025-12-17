import { Component, inject, signal } from '@angular/core';

import { RouterOutlet, RouterLinkActive, RouterLink, Router } from '@angular/router';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';
import { AuthService } from '@features/auth/services/auth.service';
import { ButtonComponent } from '@shared/components/ui/button/button.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    ButtonComponent,
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayoutComponent {
  isSidebarOpen = true;
  isHandset = signal<boolean>(false);

  private _auth = inject(AuthService);
  private _snackbar = inject(SnackbarService)
  private breakpointObserver = inject(BreakpointObserver);
  private _router = inject(Router)

  constructor() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isHandset.set(result.matches);
      });
  }

  onLogout() {
    this._auth.logout().subscribe({
      next: () => {
        this._snackbar.success("Account logout successfully")
        this._router.navigate(['/login'])
      },
      error: () => {
        this._snackbar.error("An error occoured while logging out")
      }
    })
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
