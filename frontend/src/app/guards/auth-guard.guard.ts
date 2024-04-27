import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuardService: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const router:Router = inject(Router);

  const token = localStorage.getItem('token');
  if(token === null || token === ''){
    
    router.navigate(['login']); 
    return false;
  }else{ 
    return true;
  }
};
