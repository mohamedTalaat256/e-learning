import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { baseURL } from "../constants/constants";

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseURL + '/users');
  }

  
  getMyProfile(): Observable<any> {
    return this.http.get(baseURL + '/users/getMyProfile');
  }

  public updateProfile(requestbody: any): Observable<any> {
    return this.http.put<any>(baseURL + '/users/updateMyProfile', requestbody);
  }

  updateProfileImage(formData: FormData): Observable<any> {  
    return this.http.post<any>(baseURL + '/users/updateProfileImage', formData, {
      reportProgress: true,
      observe: 'events'
    });
  } 

}