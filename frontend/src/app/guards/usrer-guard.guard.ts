import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const userGuardService: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const router:Router = inject(Router);

  const token = localStorage.getItem('token');
  var authUser = JSON.parse(localStorage.getItem('AUTH_USER'));
  var role;
  if(authUser!==null){
    role = authUser.roles[0].name;
  }

  if( (token !== null || token !== '' ) &&  role!==null  && role === 'STUDENT' ){
    return true;
  }else{ 
    router.navigate(['login']); 
    return false;
  }
};
