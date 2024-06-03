import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ReviewType, baseURL } from "../constants/constants";

@Injectable({ providedIn: 'root' })
export class ReviewService {

  constructor(private http: HttpClient) { }
 
  
  findReviewsByLectureId(lectureId:number): Observable<any> {
    return this.http.get(baseURL + '/reviews/lectures/'+lectureId);
  }
  



  public save(data: any, reviewType:ReviewType): Observable<any> {
    if(reviewType=== ReviewType.COURSE){
      return this.http.post<any>(baseURL + '/reviews/courses/save',  data);
    }else{
      return this.http.post<any>(baseURL + '/reviews/lectures/save',  data);
    }
  }
 

  public update(requestbody: any, reviewType:ReviewType): Observable<any> {
    if(reviewType=== ReviewType.COURSE){
      return this.http.put<any>(baseURL + '/reviews/courses/update', requestbody);
    }else{
      return this.http.put<any>(baseURL + '/reviews/lectures/update', requestbody);
    }
  }

}