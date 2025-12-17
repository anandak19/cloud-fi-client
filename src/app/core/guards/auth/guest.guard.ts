import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '@features/auth/services/auth.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLogin().pipe(
    map((res) => {
      // User is logged in → block login page and redirect
      router.navigate(['/']);
      return false;
    }),
    catchError((err) => {
      // Not logged in → allow access to login page
      return of(true);
    })
  );
};
