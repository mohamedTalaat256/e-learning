import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { baseURL } from "../constants/constants"; 
import { User } from "../model/user,model";

@Injectable({ providedIn: 'root' })
export class PaymentService {

  constructor(private http: HttpClient) { }

  

  public getClientSecret(requestbody: any): Observable<any> {

    return this.http.post<any>(baseURL+`/stripe/getClientSecret`, requestbody);
  }

  public confirm(id: string): Observable<any> {
    return this.http.post<any>(baseURL + '/stripe/confirm/'+id,{});
  }

  
  public cancel(id: string): Observable<any> {
    return this.http.post<any>(baseURL + '/stripe/cancel/'+id,{});
  } 


}