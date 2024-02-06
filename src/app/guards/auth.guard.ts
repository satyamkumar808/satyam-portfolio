import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router : Router = inject(Router);
  const userService : UserService = inject(UserService);

  if(userService.isLoggedIn()){
    return true;
  }
  return router.navigate(['/login']);
};
