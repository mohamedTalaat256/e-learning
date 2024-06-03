


import { FormBuilder, Validators} from '@angular/forms';
import { Injectable} from '@angular/core';
import { Review } from 'src/app/model/courseReview.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewFormControls {
  constructor(public fb: FormBuilder ) {
  } 

createReviewForm(){
    let form = this.fb.group(
      {
        id:          [null],
        contentText: [null,[Validators.required, Validators.maxLength(1000), Validators.minLength(5)]],
      }
    );

    return form;
  }


  setReviewForm(review : Review){
    let form = this.fb.group(
      {
        id:          [review.id],
        contentText: [review.contentText, [Validators.required, Validators.maxLength(1000), Validators.minLength(2)]]
      }
    );

    return form;
  }

}