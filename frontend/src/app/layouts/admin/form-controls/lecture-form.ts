


import { FormBuilder, Validators} from '@angular/forms';
import { Injectable} from '@angular/core';
import { Lecture } from 'src/app/model/lecture.model';

@Injectable({
  providedIn: 'root'
})
export class LectureFormControls {
  constructor(public fb: FormBuilder ) {
  } 

createLectureForm(){
    let form = this.fb.group(
      {
        id:                [null],
        title:             [null,[Validators.required, Validators.maxLength(200), Validators.minLength(5)]],
        description:       [null, Validators.required, Validators.maxLength(1000)]
      }
    );

    return form;
  }


  setLectureForm(course: Lecture){
    let form = this.fb.group(
      {
        id:                [course.id],
        title:             [course.title, [Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
        description:       [course.description, [Validators.required, Validators.maxLength(1000)]]
      }
    );

    return form;
  }

}