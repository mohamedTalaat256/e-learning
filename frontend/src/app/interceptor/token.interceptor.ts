import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { AuthService } from '../service/auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private inject:Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
      let authservice=this.inject.get(AuthService);
  
      let jwtToken = request.clone({
        setHeaders: {
          Authorization: 'bearer '+authservice.GetToken()
        }
      });
      return next.handle(jwtToken);
    }
}