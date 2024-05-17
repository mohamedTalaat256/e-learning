import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { imagesUrls } from 'src/app/constants/constants';
import { AppResponse } from 'src/app/model/app_response.model';
import { Course } from 'src/app/model/course.model';
import { HomeService } from 'src/app/service/home.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.scss']
})
export class LangingPageComponent implements OnInit {


  IMAGES_URL= imagesUrls;
  recentCources: Course[]=[];

  constructor(private homeService: HomeService){
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.homeService.getAllData().pipe(take(1)).subscribe({
      next: (response: AppResponse) => {

        this.recentCources = response.data.recentCourses;
      },
      error: (error: Error) => {
        Swal.fire({ 
          icon: "error",
          title: error.message,
          showConfirmButton: true,
         
        });
      }
    }
    );
  }

}
