import { HttpClient } from "@angular/common/http"; 
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";  
import { baseURL } from "../constants/constants";

@Injectable({providedIn:'root'})
export class RoleService {

  constructor(private http: HttpClient) {}


  getAll( ): Observable<any> {
    return this.http.get(baseURL+'/roles');
  }
  public save(requestbody: any): Observable<any> {
    return this.http.post<any>(baseURL+'/roles', requestbody);
  }
  

  }