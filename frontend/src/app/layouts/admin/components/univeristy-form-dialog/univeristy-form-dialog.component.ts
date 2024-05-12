import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormMode } from 'src/app/constants/constants';
import { UniversityService } from 'src/app/service/univeristy.service';
import { UniversityFormControls } from '../../form-controls/university-form';
import { take } from 'rxjs';
import { AppResponse } from 'src/app/model/app_response.model';
import { University } from 'src/app/model/university.model';
import Swal from 'sweetalert2';
import { COUNTRIES } from 'src/app/data/countries';

@Component({
  selector: 'app-univeristy-form-dialog',
  templateUrl: './univeristy-form-dialog.component.html',
  styleUrls: ['./univeristy-form-dialog.component.scss']
})
export class UniveristyFormDialogComponent implements OnInit {
  formMode: FormMode = FormMode.CREATE;
  universityForm: FormGroup;
  title: string;
  countries= COUNTRIES;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private universityService: UniversityService,
    private univercityFormControl: UniversityFormControls
  ) {
    this.title = this.data.title;
    this.formMode = this.data.formMode;
    if (this.data.formMode === FormMode.CREATE) {
      this.universityForm = this.univercityFormControl.createForm();
    } else {
      this.universityForm = this.univercityFormControl.setForm(this.data.universityData);
    }
  }

  ngOnInit(): void {

  } 

  onSubmit() {
    if (this.formMode === FormMode.CREATE) {
       
      this.universityService.save(this.universityForm.value).pipe(take(1)).subscribe({
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
    } else { 
      this.universityService.update(this.universityForm.value).pipe(take(1)).subscribe({
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
