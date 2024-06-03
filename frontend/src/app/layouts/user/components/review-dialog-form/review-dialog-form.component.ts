import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
import Swal from 'sweetalert2';
import { AppResponse } from 'src/app/model/app_response.model';
import { TranslateService } from '@ngx-translate/core';
import { ReviewFormControls } from 'src/app/layouts/admin/form-controls/courseReview-form';
import { ReviewService } from 'src/app/service/review.service';
import { ReviewType } from 'src/app/constants/constants';
import { Course } from 'src/app/model/course.model';
import { Lecture } from 'src/app/model/lecture.model';

@Component({
  selector: 'app-review-dialog-form',
  templateUrl: './review-dialog-form.component.html',
  styleUrls: ['./review-dialog-form.component.scss'],
})
export class ReviewDialogFormComponent implements OnInit {
  reviewForm: FormGroup;
  ratingValue: number = 0;
  title: string;
  reviewType: ReviewType;
  course: Course = null;
  lecture: Lecture = null;

  constructor(
    private reviewService: ReviewService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ReviewDialogFormComponent>,
    private reviewFormControls: ReviewFormControls,
    private tranlate: TranslateService
  ) {
    this.reviewForm = this.reviewFormControls.createReviewForm();
    this.title = this.data.title;
    this.reviewType = this.data.reviewType;
  }

  ngOnInit(): void {
    if (this.data.reviewType === ReviewType.COURSE) {
      this.course = this.data.data;
    } else {
      this.lecture = this.data.data;
    }
  }

  ratingChange(rating: number) {
    this.ratingValue = rating;
  }

  submit() {
    let payload = {
      contentText: this.reviewForm.value.contentText,
      ratingValue: this.ratingValue,
      course: this.course,
      lecture: this.lecture,
    };

    console.log(this.reviewType);
    this.reviewService
      .save(payload, this.reviewType)
      .pipe(take(1))
      .subscribe({
        next: (response: AppResponse) => {
          if (response.ok) {
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
