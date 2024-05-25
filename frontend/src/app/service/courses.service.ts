import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { baseURL } from "../constants/constants";

@Injectable({ providedIn: 'root' })
export class CourseService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseURL + '/courses');
  }

  findById(courseId:number): Observable<any> {
    return this.http.get(baseURL + `/courses/${courseId}`);
  }

  myEnrolledCourses(): Observable<any> {
    return this.http.get(baseURL + '/courses/myEnrolledCourses');
  }


  public save(courseUploadRequest: any, coverImageFile: File): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('courseUploadRequest', new Blob([JSON.stringify(courseUploadRequest)], { type: 'application/json' }));
    formData.append('coverImageFile', coverImageFile, coverImageFile.name);

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.post<any>(baseURL + '/courses/save',  formData, { headers: headers });
  }

  public update(requestbody: any): Observable<any> {
    return this.http.put<any>(baseURL + '/courses/update', requestbody);
  }

/*  
  



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