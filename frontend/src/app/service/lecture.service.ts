import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { baseURL } from "../constants/constants";

@Injectable({ providedIn: 'root' })
export class LectureService {

  constructor(private http: HttpClient) { }
  findAllByCourseId(courseId: number): Observable<any> {
    return this.http.get(baseURL + `/lectures?courseId=${courseId}`);
  } 
 

 
  public save(courseUploadRequest: any, coverImageFile: File, lectureVideo :File): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('courseUploadRequest', new Blob([JSON.stringify(courseUploadRequest)], { type: 'application/json' }));
    formData.append('coverImageFile', coverImageFile, coverImageFile.name);
    formData.append('lectureVideo', lectureVideo, lectureVideo.name);

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.post<any>(baseURL + '/lectures/save',  formData, { headers: headers });
  }
 
  getVideo(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'video/mp4'
    });
    return this.http.get('http://localhost:8090/media/videos/video.mp4',{ headers: headers });
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