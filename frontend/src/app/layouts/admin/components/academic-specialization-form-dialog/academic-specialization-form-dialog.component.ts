import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormMode } from 'src/app/constants/constants';
import { AcademicSpecializationFormControls } from '../../form-controls/academic-specialization-form';
import { AcademicSpecializationService } from 'src/app/service/academicSpecialization.service';
import { take } from 'rxjs';
import Swal from 'sweetalert2';
import { AppResponse } from 'src/app/model/app_response.model';

@Component({
  selector: 'app-academic-specialization-form-dialog',
  templateUrl: './academic-specialization-form-dialog.component.html',
  styleUrls: ['./academic-specialization-form-dialog.component.scss']
})
export class AcademicSpecializationFormDialogComponent  implements OnInit {
  formMode: FormMode = FormMode.CREATE;
  specializationForm: FormGroup;
  title: string; 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private academicSpecializationService: AcademicSpecializationService,
    private academicSpecializationFormControls: AcademicSpecializationFormControls,
    private dialogRef: MatDialogRef<AcademicSpecializationFormDialogComponent>
  ) {
    this.title = this.data.title;
    this.formMode = this.data.formMode;
    if (this.data.formMode === FormMode.CREATE) {
      this.specializationForm = this.academicSpecializationFormControls.createForm();
    } else {
      this.specializationForm = this.academicSpecializationFormControls.setForm(this.data.universityData);
    }
  }

  ngOnInit(): void {

  } 

  onSubmit() {
    if (this.formMode === FormMode.CREATE) {
       
      this.academicSpecializationService.save(this.specializationForm.value).pipe(take(1)).subscribe({
        next: (response: any) => {
          if (response.ok) {
            Swal.fire({
              icon: "success",
              title: response.message,
              showConfirmButton: true,
              timer: 1500
            });
            this.dialogRef.close(response.data);
          }
        },
        error: (error: AppResponse) => {
          Swal.fire({
            icon: "error",
            title: error.message,
            showConfirmButton: true,
            timer: 1500
          });
        }
      });
    } else { 
      this.academicSpecializationService.update(this.specializationForm.value).pipe(take(1)).subscribe({
        next: (response: any) => {
          if (response.ok) {
            Swal.fire({
              icon: "success",
              title: response.message,
              showConfirmButton: true,
              timer: 1500
            });
          }
        },
        error: (error: AppResponse) => {
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

