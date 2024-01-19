import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms'; 
import { expandCollapse, slideInOutY } from 'src/app/animation/animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations:[expandCollapse ,slideInOutY, ]
})
export class AuthComponent {
  genders: string[]=['MALE', 'FEMALE'];

  loginForm: FormGroup = new FormGroup({});

  isLoginMode: boolean = true;

  teacherCheked = false;
  studentCheked = false;
  agreeTremsChecked = false;
 


  isExpanded: boolean = false;

  toggleExpandContainer() {
    this.isExpanded = !this.isExpanded;
  }

  toggleStudentCheked(){
    this.studentCheked = ! this.studentCheked;
    this.toggleExpandContainer();
  }
  enableRegisterMode(){
    this.isLoginMode = false;
    this.isExpanded = true; 
  }

  enableLoginMode(){
    this.isLoginMode = true;
    this.isExpanded = false;
  }
}
