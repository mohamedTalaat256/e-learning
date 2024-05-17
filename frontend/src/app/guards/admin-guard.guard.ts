import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const adminGuardService: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const router:Router = inject(Router);

  const token = localStorage.getItem('token');
  const role = JSON.parse(localStorage.getItem('AUTH_USER')).roles[0].name;

  if( (token !== null || token !== '' ) &&  role === 'ADMIN'){
    return true;
  }else{ 
    router.navigate(['login']); 
    return false;
  }
};
