import { Component, Input } from '@angular/core';
import { imagesUrls } from 'src/app/constants/constants';
import { Course } from 'src/app/model/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  IMAGES_URL= imagesUrls;

  @Input() course: Course;


 
}
