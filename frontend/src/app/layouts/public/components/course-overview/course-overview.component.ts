import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import {
  EMPTY_LECTUER,
  FormMode,
  LECTURE_STREAM_URL,
  ReviewType,
  VIDEOS_URL,
  constant,
  dialog_h_md,
  dialog_w_md,
  imagePlaceholder,
  imagesUrls,
  profileImagesUrls,
} from 'src/app/constants/constants';
import { ReviewDialogFormComponent } from 'src/app/layouts/user/components/review-dialog-form/review-dialog-form.component';
import { AppResponse } from 'src/app/model/app_response.model';
import { Lecture } from 'src/app/model/lecture.model';
import { LectureService } from 'src/app/service/lecture.service';
import { ReviewService } from 'src/app/service/review.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss'],
})
export class CourseOverviewComponent implements OnInit {
  VIDEOS_URL = VIDEOS_URL;

  LECTURES_IMAGES_URL = imagesUrls;
  LECTURE_STREAM_URL = LECTURE_STREAM_URL;
  PROFILE_IMAGES_URL = profileImagesUrls;
  DEFAULT_USER_IMAGE = imagePlaceholder;

  @ViewChild('videoPlayer') videoPlayerRef!: ElementRef;

  videoPlayer: any;

  currentLecture: Lecture = EMPTY_LECTUER;

  lectures: Lecture[] = [];
  lecturesIndexes: number[];
  currentTime: any = 0;

  constructor(
    private lectureService: LectureService,
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private dialog: MatDialog,
  ) {}
 

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getCourseLectures(params['courseId']);
    });
  }

  getCourseLectures(courseId: number) {
    this.lectureService
      .findAllByCourseId(courseId)
      .pipe(take(1))
      .subscribe({
        next: (response: AppResponse) => {
          this.lectures = response.data;

          this.getCurrentLectureIndex()
          this.getCurrentLectureReviews(this.currentLecture.id);;
          this.videoPlayer = this.videoPlayerRef.nativeElement;
          this.videoPlayer.load();

          /*  setInterval(()=>{
          this.currentTime = this.videoPlayer.currentTime;
        },10000); */
        },
        error: (error: Error) => {
          Swal.fire({
            icon: 'error',
            title: error.message,
            showConfirmButton: true,
          });
        },
      });
  }

  getCurrentLectureIndex() {
    let index: number = Number(
      localStorage.getItem(constant.CURRENT_LECTURE_INDEX)
    );
    if (index) {
      this.currentLecture = this.lectures.filter(
        (lec) => lec.lectureOrder === index
      )[0];
    } else {
      this.currentLecture = this.lectures.filter(
        (lec) => lec.lectureOrder === 1
      )[0];
      localStorage.setItem(
        constant.CURRENT_LECTURE_INDEX,
        this.currentLecture.lectureOrder.toString()
      );
    }
  }

  changeCurrentLecture(lectureId: number) {
    this.currentLecture = this.lectures.filter(
      (lec) => lec.id === lectureId
    )[0];
    localStorage.setItem(
      constant.CURRENT_LECTURE_INDEX,
      this.currentLecture.lectureOrder.toString()
    );
    this.videoPlayer = this.videoPlayerRef.nativeElement;
    this.videoPlayer.src = VIDEOS_URL + this.currentLecture.video;
    this.videoPlayer.load();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });


    //get Reviews

    this.getCurrentLectureReviews(lectureId);
  }

  getCurrentLectureReviews(lectureId: number){
    this.reviewService
    .findReviewsByLectureId(lectureId)
    .pipe(take(1))
    .subscribe({
      next: (response: AppResponse) => {  
        this.currentLecture.reviews = response.data;
      },
      error: (error: Error) => {
        Swal.fire({
          icon: 'error',
          title: error.message,
          showConfirmButton: true,
        });
      },
    });
  }






  openAddReviewDialog(){
    const data = {
      title: this.translate.instant('leave_review'),
      formMode: FormMode.CREATE,
      data: this.currentLecture,
      reviewType: ReviewType.LECTURE
    };
    const dialogRef = this.dialog.open(ReviewDialogFormComponent, {
      width: dialog_w_md,
      height: dialog_h_md,
      data: data
    });
 
    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
     this.currentLecture.reviews.push(result);
    });
  }
}
