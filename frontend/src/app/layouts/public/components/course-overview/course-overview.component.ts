import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { EMPTY_LECTUER, VIDEOS_URL, constant, imagesUrls } from 'src/app/constants/constants';
import { AppResponse } from 'src/app/model/app_response.model';
import { Lecture } from 'src/app/model/lecture.model';
import { LectureService } from 'src/app/service/lecture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent implements OnInit {

  VIDEOS_URL = VIDEOS_URL;

  LECTURES_IMAGES_URL= imagesUrls;

  @ViewChild("videoPlayer") videoPlayerRef!: ElementRef;

  videoPlayer:any;

  currentLecture: Lecture=EMPTY_LECTUER;
  
  lectures: Lecture[] =  [];
  lecturesIndexes: number[];

  constructor(private lectureService: LectureService,
    private route: ActivatedRoute,
    private translate: TranslateService){}

  ngOnInit(): void { 
    this.route.params.subscribe(params => { this.getCourseLectures(params['courseId']); });
  }

  getCourseLectures(courseId: number){
    this.lectureService.findAllByCourseId(courseId).pipe(take(1)).subscribe({
      next: (response: AppResponse) => {
       this.lectures = response.data;
      
        this.getCurrentLectureIndex();
        this.videoPlayer = this.videoPlayerRef.nativeElement;
        this.videoPlayer.load(); 
      },
      error: (error: Error) => {

        Swal.fire({ 
          icon: "error",
          title: error.message,
          showConfirmButton: true
        });
      }
    });
  }


  getCurrentLectureIndex(){
    let index:number =  Number(localStorage.getItem(constant.CURRENT_LECTURE_INDEX));
    if(index){
      this.currentLecture = this.lectures.filter(lec => lec.lectureOrder === index)[0];
    }else{
      this.currentLecture = this.lectures.filter(lec => lec.lectureOrder === 1)[0];
      localStorage.setItem(constant.CURRENT_LECTURE_INDEX, this.currentLecture.lectureOrder.toString());

    }



  }

  changeCurrentLecture(lectureId: number){

    this.currentLecture = this.lectures.filter(lec => lec.id === lectureId)[0];
    localStorage.setItem(constant.CURRENT_LECTURE_INDEX, this.currentLecture.lectureOrder.toString());
    this.videoPlayer = this.videoPlayerRef.nativeElement;
    this.videoPlayer.src = VIDEOS_URL+ this.currentLecture.video;
    this.videoPlayer.load(); 
  }

}
