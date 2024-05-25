import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CourseReviewService } from 'src/app/service/courseReview.service';
import { CourseReviewFormControls } from '../../../admin/form-controls/courseReview-form';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
import Swal from 'sweetalert2';
import { AppResponse } from 'src/app/model/app_response.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-course-review-dialog-form',
  templateUrl: './course-review-dialog-form.component.html',
  styleUrls: ['./course-review-dialog-form.component.scss'],
})
export class CourseReviewDialogFormComponent implements OnInit {
  reviewForm: FormGroup;
  ratingValue: number = 0;
  title: string;

  constructor(
    private courseReviewService: CourseReviewService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CourseReviewDialogFormComponent>,
    private courseReviewFormControls: CourseReviewFormControls,
    private tranlate: TranslateService
  ) {
    this.reviewForm = this.courseReviewFormControls.createCourseReviewForm();
    this.title = this.data.title
  }

  ngOnInit(): void {}

  ratingChange(rating:number) {
    this.ratingValue = rating;
  }

  submit() {
    const payload = {
      contentText: this.reviewForm.value.contentText,
      ratingValue: this.ratingValue,
      course: this.data.course,
    };

    this.courseReviewService
      .save(payload)
      .pipe(take(1))
      .subscribe({
        next: (response: AppResponse) => {

          if(response.ok){

            this.dialogRef.close(response.data);
            Swal.fire({
              icon: 'success',
              title: this.tranlate.instant(response.message),
              showConfirmButton: false,
              timer: 1500,
            });
          }
         
        },
        error: (error: AppResponse) => {
          Swal.fire({
            icon: 'error',
            title: error.message,
            showConfirmButton: false,
          });
        },
      });
  }
}
