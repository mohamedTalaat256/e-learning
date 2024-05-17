


import { FormBuilder, Validators} from '@angular/forms';
import { Injectable} from '@angular/core';  
import { Course } from 'src/app/model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseFormControls {
  constructor(public fb: FormBuilder ) {
  } 

createCourseForm(){
    let form = this.fb.group(
      {
        id:                [null],
        title:             [null,[Validators.required, Validators.maxLength(20), Validators.minLength(5)]],
        description:       [null, Validators.required, Validators.maxLength(200)],
        hours:             [null, Validators.required, Validators.min(20)],
        isCourseFree:      [false,  ], 
        price:             [0, Validators.required],
        discount:          [0, ],
        discountStartDate: [null, ],
        discountEndDate:   [null, ],
      }
    );

    return form;
  }


  setCourseForm(course: Course){
    let form = this.fb.group(
      {
        id:                [course.id],
        title:             [course.title, [Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
        isCourseFree:      [course.isCourseFree,  ],
        description:       [course.description, [Validators.required, Validators.maxLength(200)]],
        hours:             [course.hours, Validators.required, Validators.min(20)],
        price:             [course.price, [Validators.required]],
        discount:          [course.discount, ],
        discountStartDate: [course.discount, ],
        discountEndDate:   [course.discount, ],
      }
    );

    return form;
  }

}