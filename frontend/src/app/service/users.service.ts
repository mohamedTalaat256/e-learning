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

  updateProfileImage(formData: FormData): Observable<any> { 
 
   /*   let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
     */
    return this.http.post<any>(baseURL + '/users/updateProfileImage', formData, {
    //  headers,
      reportProgress: true,
      observe: 'events'
    });
  }
/*  
 
  public save(requestbody: UserSaveRequest): Observable<any> {
    return this.http.post<any>(baseURL + '/users', requestbody);
  }

  findById(id: number): Observable<any> {
    return this.http.get(baseURL + '/users/' + id)
  }

  searchUser(searchText: string): Observable<any> {
    return this.http.get(baseURL + '/users/search/' + searchText)
  }
 
  public delete(id: number): Observable<any> {
    return this.http.post<any>(baseURL + '/persons/delete/' + id, null);
  }
  */

}