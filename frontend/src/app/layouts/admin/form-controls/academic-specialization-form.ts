import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';  
import { University } from 'src/app/model/university.model';

@Injectable({
  providedIn: 'root'
})
export class AcademicSpecializationFormControls {
  constructor(public fb: FormBuilder ) {
  } 

  createForm() {
    return this.fb.group(
      {
        id:      [null],
        name:    [null, [Validators.required, Validators.maxLength(255)]]
      }
    );
  }
  
  setForm(univeristy: University) {
    return this.fb.group(
      {
        id:      [univeristy.id, [Validators.required, Validators.maxLength(255)]],
        name:    [univeristy.name, [Validators.required, Validators.maxLength(255)]]
      }
    );
  } 
}