import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppResponse } from 'src/app/model/app_response.model';
import { AcademicSepicailization } from 'src/app/model/academic-sepicailization.model';
import { AcademicSpecializationService } from 'src/app/service/academicSpecialization.service';
import { FacultyFormControls } from '../../form-controls/faculty-form';
import { University } from 'src/app/model/university.model';
import { UniversityService } from 'src/app/service/univeristy.service';
import { FacultyService } from 'src/app/service/faculty.service';
import Swal from 'sweetalert2';
import { FormMode } from 'src/app/constants/constants';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-faculty-create-dialog',
  templateUrl: './faculty-create-dialog.component.html',
  styleUrls: ['./faculty-create-dialog.component.scss']
})
export class FacultyCreateDialogComponent implements OnInit {
  formMode: FormMode = FormMode.CREATE;
  facultyForm: FormGroup;
  title: string;
  specializations: AcademicSepicailization[];
  universities: University[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private facultyService: FacultyService,
  private academicSpecializationService: AcademicSpecializationService,
  private universityService: UniversityService,
  private facultyFormControl: FacultyFormControls
){
    this.title = this.data.title;
    this.formMode = this.data.formMode;
    if(this.data.formMode === FormMode.CREATE){
      this.facultyForm = this.facultyFormControl.createFacultyForm();
    }else{
      this.facultyForm = this.facultyFormControl.setFacultyForm(this.data.facultyData);
    }
  }


  ngOnInit(): void {
    
    this.getAllUniversities();
    this.getAllSepicailizations();
  }

  getAllUniversities(){
    this.universityService.getAll().pipe(take(1)).subscribe({
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
    this.academicSpecializationService.getAll().pipe(take(1)).subscribe({
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

  onSubmit(){
    
 
    if(this.formMode=== FormMode.CREATE){
      const payload = {
        sepicailization: {
          id: this.facultyForm.value.academicSpecialization
        },
        university: {
          id:this.facultyForm.value.university
        }
      };
      this.facultyService.save(payload).pipe(take(1)).subscribe({
        next:(response: any)=>{
          if(response.ok){
            Swal.fire({ 
              icon: "success",
              title: response.message,
              showConfirmButton: true,
              timer: 1500
            });
          }
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
      console.log(this.data.facultyData);
      const payload = {



        id: this.data.facultyData.id,
        sepicailization: {
          id: this.facultyForm.value.academicSpecialization
        },
        university: {
          id:this.facultyForm.value.university
        }
      };
      this.facultyService.update(payload).pipe(take(1)).subscribe({
        next:(response: any)=>{
          if(response.ok){
            Swal.fire({ 
              icon: "success",
              title: response.message,
              showConfirmButton: true,
              timer: 1500
            });
          }
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
    }
    
  }
}
