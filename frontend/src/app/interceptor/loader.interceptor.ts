import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable, finalize } from 'rxjs'; 
import { LoaderService } from '../service/loader.service';
import { baseURL } from '../constants/constants';


@Injectable()
export class loaderInterceptor implements HttpInterceptor {

    constructor(private loaderService: LoaderService) {}
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {

      const excludedUrl = baseURL+'/users/updateProfileImage'; 
      if (req.url === excludedUrl) {
        // If the URL matches, simply pass the request through without intercepting
        return next.handle(req);
      }

      this.loaderService.showLoader();
      return next.handle(req).pipe(
        finalize(() => this.loaderService.hideLoader())
      );
    }
}