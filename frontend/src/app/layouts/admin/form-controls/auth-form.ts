import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';  

@Injectable({
  providedIn: 'root'
})
export class AuthFormControls {
  constructor(public fb: FormBuilder ) {
  } 

  createLoginForm() {
    let form = this.fb.group(
      {
        username:    [null, [Validators.required, Validators.maxLength(255)]],
        password: [null, [Validators.required, Validators.maxLength(255)]],
      }
    );
    return form;
  }
  
  createRegisterForm() {
    let form = this.fb.group(
      {
        email:    [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
        username:    [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
        firstName:    [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
        lastName:    [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
        role:    [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
        password: [null, [Validators.required, Validators.maxLength(255)]],
      }
    );
    return form;
  }
}