import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { baseURL } from "../constants/constants";

@Injectable({ providedIn: 'root' })
export class HomeService {

  constructor(private http: HttpClient) { }
  getAllData(): Observable<any> {
    return this.http.get(baseURL + '/home');
  } 

}