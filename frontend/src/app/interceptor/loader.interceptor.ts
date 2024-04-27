import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable, finalize } from 'rxjs'; 
import { LoaderService } from '../service/loader.service';


@Injectable()
export class loaderInterceptor implements HttpInterceptor {

    constructor(private loaderService: LoaderService) {}
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      this.loaderService.showLoader();
      return next.handle(req).pipe(
        finalize(() => this.loaderService.hideLoader())
      );
    }
}