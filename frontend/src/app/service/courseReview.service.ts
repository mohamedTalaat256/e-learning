import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { baseURL } from "../constants/constants";

@Injectable({ providedIn: 'root' })
export class CourseReviewService {

  constructor(private http: HttpClient) { }
 
  

  public save(data: any): Observable<any> {

    
    return this.http.post<any>(baseURL + '/courses/reviews/save',  data);
  }

  public update(requestbody: any): Observable<any> {
    return this.http.put<any>(baseURL + '/courses/update', requestbody);
  } 

}