import { Component, OnInit } from '@angular/core';
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
export class AuthComponent implements OnInit {

  genders: string[]=['MALE', 'FEMALE'];
  
  authForm: FormGroup;
  isLoginMode: boolean = true;
  agreeTremsChecked = false;
  isExpanded: boolean = false; 

  constructor( private authServise: AuthService,private router: Router, private authFormControl: AuthFormControls){

    
  }

  ngOnInit(): void {
    this.authForm =this.authFormControl.createLoginForm();
  }

  toggleExpandContainer() {
    this.isExpanded = !this.isExpanded;
  }

  toggleMode(){
    this.isLoginMode =! this.isLoginMode;
    this.isExpanded =! this.isExpanded;
    if(this.isLoginMode){
      this.authForm =this.authFormControl.createLoginForm();
    }else{
      this.authForm =this.authFormControl.createRegisterForm();
    }
  }
  
  onSubmit(){
    
    if(this.isLoginMode){
      this.authServise.login(this.authForm.value).subscribe({
        next:(response: any)=>{ 
  
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('refreshToken', response.data.refreshToken);

          
          localStorage.setItem('AUTH_USER', JSON.stringify(response.data) );
  
          
          this.router.navigate(['/admin'])
           
        },
        error:(error: AppResponse)=>{ 
          Swal.fire({ 
            icon: "error",
            title: error.message,
            showConfirmButton: true
          });
        }
      }); 
    }else{
      this.authServise.register(this.authForm.value).subscribe({
        next:(response: any)=>{ 
/*           localStorage.setItem('token', response.data.token);
          localStorage.setItem('AUTH_USER', JSON.stringify(response.data.user) );
  
          
          this.router.navigate(['/admin']) */
           
        },
        error:(error: AppResponse)=>{ 
          Swal.fire({ 
            icon: "error",
            title: error.message,
            showConfirmButton: true
          });
        }
      }); 
    }
    
  }

 

 
}
