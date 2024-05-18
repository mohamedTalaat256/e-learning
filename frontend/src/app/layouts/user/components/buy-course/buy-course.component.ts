import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { imagePlaceholder, imagesUrls, profileImagesUrls } from 'src/app/constants/constants';
import { AppResponse } from 'src/app/model/app_response.model';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/courses.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buy-course',
  templateUrl: './buy-course.component.html',
  styleUrls: ['./buy-course.component.scss']
})
export class BuyCourseComponent implements OnInit {
  IMAGES_URL = imagesUrls;
  PROFILE_IMAGES_URL = profileImagesUrls;
  DEFAULT_USER_IMAGE = imagePlaceholder;
  course:Course;

  constructor(private route: ActivatedRoute,
    private translate: TranslateService,
    private courseService: CourseService,
  
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.getCourse(params['courseId']); });    
  }

  getCourse(courseId: number){

    this.courseService.findById(courseId).subscribe({
      next: (response: AppResponse) => {
        this.course = response.data;
      },
      error: (error: Error) => {
        Swal.fire({ 
          icon: "error",
          title: error.message,
          showConfirmButton: true,
         
        });
      }
    });
    
  }

}
