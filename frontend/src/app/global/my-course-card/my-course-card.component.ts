import { Component, Input } from '@angular/core';
import { imagesUrls } from 'src/app/constants/constants';
import { Course } from 'src/app/model/course.model';

@Component({
  selector: 'app-my-course-card',
  templateUrl: './my-course-card.component.html',
  styleUrls: ['./my-course-card.component.scss']
})
export class MyCourseCardComponent {

  IMAGES_URL= imagesUrls;

  @Input() course: Course;

}
