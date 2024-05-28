import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY_COURSE, FormMode, dialog_h_md, dialog_w_md, imagePlaceholder, imagesUrls, profileImagesUrls } from 'src/app/constants/constants';
import { AppResponse } from 'src/app/model/app_response.model';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/courses.service';
import Swal from 'sweetalert2';
import { CourseReviewDialogFormComponent } from '../course-review-dialog-form/course-review-dialog-form.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-buy-course',
  templateUrl: './buy-course.component.html',
  styleUrls: ['./buy-course.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BuyCourseComponent implements OnInit {
  IMAGES_URL = imagesUrls;
  PROFILE_IMAGES_URL = profileImagesUrls;
  DEFAULT_USER_IMAGE = imagePlaceholder;
  course:Course= EMPTY_COURSE;


  constructor(private route: ActivatedRoute,
    private translate: TranslateService,
    private courseService: CourseService,
    private dialog: MatDialog,
  
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.getCourse(params['courseId']); });
     
  }


  getCourse(courseId: number){

    this.courseService.findById(courseId).subscribe({
      next: (response: AppResponse) => {
        this.course = response.data;
        this.course.rating = Math.ceil(this.course.rating);
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


  openAddReviewDialog(){
    const data = {
      title: this.translate.instant('leave_review'),
      formMode: FormMode.CREATE,
      course: this.course
    };
    const dialogRef = this.dialog.open(CourseReviewDialogFormComponent, {
      width: dialog_w_md,
      height: dialog_h_md,
      data: data
    });
 
    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
     this.course.reviews.push(result);
    });
  }

}