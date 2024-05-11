import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"; 
import { AuthService } from "../service/auth.service";



@Injectable()
export class AuthInterceptor implements HttpInterceptor{
 
    
    constructor(private authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
        const accessToken = this.authService.GetToken();

        if(accessToken != ''){
            const cloned = req.clone({
                setHeaders: {
                    Authorization: 'bearer '+accessToken,
                   // 'content-type': 'application/json'
                  }
            });

            return next.handle(cloned);
        }else{
            return next.handle(req);
        }
    }
}