import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { LoginService } from './shared/services/login.service';

export const firstGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  if(loginService.isLoggedIn){
    return of(true);
  } else {
    router.navigate(['/login']);
    return of(false);
  }
};
