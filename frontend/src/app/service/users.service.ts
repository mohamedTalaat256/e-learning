import { HttpClient } from "@angular/common/http"; 
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";  
import { baseURL } from "../constants/constants";

@Injectable({providedIn:'root'})
export class UserService {

  constructor(private http: HttpClient) {}


  getAll( ): Observable<any> {
    
    return this.http.get('https://jsonplaceholder.org/users');
    //return this.http.get(baseURL+'/users');
  }

  findById(id: number): Observable<any> {
    return this.http.get(baseURL+'/users/'+ id )
  }

  searchUser(searchText: string): Observable<any> {
    return this.http.get(baseURL+'/users/search/'+ searchText )
  }
/*   public save(requestbody: DirectorSaveRequest): Observable<any> {
    return this.http.post<any>(baseURL+'/persons', requestbody);
  }

  public update(id: number, requestbody: DirectorSaveRequest): Observable<any> {
    return this.http.put<any>(baseURL+'/persons/'+id, requestbody);
  }
 */
  public delete(id: number): Observable<any> {
    return this.http.post<any>(baseURL+'/persons/delete/'+id,null);
  }
  

  }