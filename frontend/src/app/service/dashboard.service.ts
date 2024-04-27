import { HttpClient, HttpHeaders } from "@angular/common/http";
import {  Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { baseURL } from "../constants/constants";  
import { TranslateService } from "@ngx-translate/core"; 

@Injectable({ providedIn: 'root' })
export class DashboardService {
 
  constructor(private http: HttpClient, private translate: TranslateService) {
   
  }
 

  getData(): Observable<any> {
    return this.http.get(baseURL + '/dashboard');
  }
 


}