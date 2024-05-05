import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppResponse } from 'src/app/model/app_response.model';
import { Sepicailization } from 'src/app/model/sepicailization.model';
import { AcademicSpecializationService } from 'src/app/service/academicSpecialization.service';
import { FacultyFormControls } from '../../form-controls/faculty-form';
import { University } from 'src/app/model/university.model';
import { UniversityService } from 'src/app/service/univeristy.service';

@Component({
  selector: 'app-faculty-create-dialog',
  templateUrl: './faculty-create-dialog.component.html',
  styleUrls: ['./faculty-create-dialog.component.scss']
})
export class FacultyCreateDialogComponent implements OnInit {
  facultyForm: FormGroup;
  title: string;
  specializations: Sepicailization[];
  universities: University[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private academicSpecializationService: AcademicSpecializationService,
  private universityService: UniversityService,
  private facultyFormControl: FacultyFormControls
){
    this.title = this.data.title;
  }


  ngOnInit(): void {
    this.facultyForm = this.facultyFormControl.createFacultyForm();
    this.getAllUniversities();
    this.getAllSepicailizations();
  }

  getAllUniversities(){
    this.universityService.getAll().subscribe({
      next:(response: AppResponse)=>{  
        if(response.ok){
          this.universities=  response.data;
        }
      },
      error:(error: Error)=>{
        console.log(error); 
      }
    }
    );
  }

  getAllSepicailizations(){
    this.academicSpecializationService.getAll().subscribe({
      next:(response: AppResponse)=>{  
        if(response.ok){
          this.specializations=  response.data;
        }
      },
      error:(error: Error)=>{
        console.log(error); 
      }
    }
    );
  }

  onsubmit(){}
}
