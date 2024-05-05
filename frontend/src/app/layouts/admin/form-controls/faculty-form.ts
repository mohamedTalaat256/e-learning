import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';  
import { Faculty } from 'src/app/model/faculty.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyFormControls {
  constructor(public fb: FormBuilder ) {
  } 

  createFacultyForm() {
    return this.fb.group(
      {
        academicSpecialization:    [null, [Validators.required, Validators.maxLength(255)]],
        university: [null, [Validators.required, Validators.maxLength(255)]],
      }
    );
  }
  
  setFacultyForm(faculty: Faculty) {
    return this.fb.group(
      {
        academicSpecialization:  [faculty.sepicailization.id, [Validators.required, Validators.maxLength(255)]],
        university:              [faculty.university.id, [Validators.required, Validators.maxLength(255)]],
      }
    );
  } 
}