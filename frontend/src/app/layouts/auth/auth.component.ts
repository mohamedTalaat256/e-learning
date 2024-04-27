import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { expandCollapse, slideInOutY } from 'src/app/animation/animations';
import { AppResponse } from 'src/app/model/app_response.model';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
import { AuthFormControls } from '../admin/form-controls/auth-form';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations:[expandCollapse ,slideInOutY, ]
})
export class AuthComponent {

  genders: string[]=['MALE', 'FEMALE'];
  
  authForm: FormGroup = new FormGroup({});
  isLoginMode: boolean = true;
  agreeTremsChecked = false;
  isExpanded: boolean = false; 

  constructor( private authServise: AuthService,private router: Router, private authFormControl: AuthFormControls){

    this.authForm =this.authFormControl.createLoginForm();
  }


  toggleExpandContainer() {
    this.isExpanded = !this.isExpanded;
  }
 
  enableRegisterMode(){
    this.isLoginMode = false;
    this.isExpanded = true;
    this.authForm =this.authFormControl.createRegisterForm();
  }

  enableLoginMode(){
    this.isLoginMode = true;
    this.isExpanded = false;
    this.authForm =this.authFormControl.createLoginForm();
  
  }




  onSubmit(){
    
    if(this.isLoginMode){
      this.authServise.login(this.authForm.value).subscribe({
        next:(response: any)=>{ 
  
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('AUTH_USER', JSON.stringify(response.data.user) );
  
          
          this.router.navigate(['/admin'])
           
        },
        error:(error: AppResponse)=>{ 
          Swal.fire({ 
            icon: "error",
            title: error.message,
            showConfirmButton: true,
            timer: 1500
          });
        }
      }); 
    }else{
      
    }
    
  }

 

 
}
