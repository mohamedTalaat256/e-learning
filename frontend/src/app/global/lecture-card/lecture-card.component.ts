import { Component, Input } from '@angular/core';
import { VIDEOS_URL, imagesUrls } from 'src/app/constants/constants';
import { Lecture } from 'src/app/model/lecture.model';

@Component({
  selector: 'app-lecture-card',
  templateUrl: './lecture-card.component.html',
  styleUrls: ['./lecture-card.component.scss']
})
export class LectureCardComponent {


  VIDEOS_URL = VIDEOS_URL;

  LECTURES_IMAGES_URL= imagesUrls;

  @Input() lecture: Lecture;
}
