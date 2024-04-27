import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs'; 


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token') && localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
        req = req.clone({
            headers: req.headers.set( 'Authorization', `Bearer ${token}`),
            url:  req.url
        });

        return next.handle(req);
    }
}