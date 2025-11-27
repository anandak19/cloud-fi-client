import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-routers',
  imports: [],
  templateUrl: './user-routers.component.html',
  styleUrl: './user-routers.component.scss',
})
export class UserRoutersComponent {
  private _router = inject(Router);
  navigateSales() {
    this._router.navigate(['dashboard/sales']);
  }
}
