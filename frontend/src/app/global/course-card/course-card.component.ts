import { Component, Input } from '@angular/core';
import { imagePlaceholder, imagesUrls, profileImagesUrls } from 'src/app/constants/constants';
import { Course } from 'src/app/model/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  IMAGES_URL= imagesUrls;
  PROFILE_IMAGES_URL= profileImagesUrls;
  DEFAULT_USER_IMAGE = imagePlaceholder;

  @Input() course: Course;


 
}
