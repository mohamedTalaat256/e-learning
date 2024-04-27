import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { baseURL } from "../constants/constants";
import { LoginRequest } from "../request/login.request";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(requestbody: LoginRequest): Observable<any> {
    return this.http.post<any>(baseURL + '/auth/login', requestbody);
  }

  public getAuthorizationToken() {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    /* const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token); */

    return token !== null || token !== '';
    //  return !isExpired;
  }


  public logout(): Observable<any> { 

    return this.http.get<any>(baseURL + '/logout');
  }

}