import { Component, Inject, OnInit } from '@angular/core';
import { FormMode, imagePlaceholder, imagesUrls } from '../../../../constants/constants';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/model/course.model';
import { CourseFormControls } from '../../form-controls/course-form';
import { CourseService } from 'src/app/service/courses.service';
import { AppResponse } from 'src/app/model/app_response.model';
import Swal from 'sweetalert2';

 
@Component({
  selector: 'app-course-dialog-form',
  templateUrl: './course-dialog-form.component.html',
  styleUrls: ['./course-dialog-form.component.scss']
})


export class CourseDialogFormComponent implements OnInit {
  selectedFiles?: FileList;
  selectedCoverImage?: File;

  progress = 0;
  message = '';
  preview = '';
  defaultPreview = imagePlaceholder;
  courseForm: FormGroup;
  formMode: FormMode;
  isCourseFree: boolean=false;
  title: string;
  courseData: Course ;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private courseFomrControle: CourseFormControls,
  private courseService: CourseService, private dialogRef: MatDialogRef<CourseDialogFormComponent>
) {
    this.courseForm = this.courseFomrControle.createCourseForm();

    console.log(data);
    this.formMode = data.formMode;
    this.title = data.title;
    this.courseData = data.courseData;
     
  }

  ngOnInit(): void {
    if (this.formMode === FormMode.EDIT) { 
      this.courseForm = this.courseFomrControle.setCourseForm(this.courseData);
      this.preview = imagesUrls+ this.courseData.coverImage; 
    }
  }
 

  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.selectedCoverImage = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.selectedCoverImage);
      }
    }
  }




  toggleisCourseFree($event){
    this.courseForm = $event.checked;
  }


  onSubmit(){

    this.courseService.save(this.courseForm.value, this.selectedCoverImage).subscribe({
      next:(response: AppResponse)=>{  
        if(response.ok){
          Swal.fire({
            icon: "success",
            title: response.message,
            showConfirmButton: true,
            timer: 1500
          });
          this.dialogRef.close(response.data);
        }
      },
      error:(error: Error)=>{
        Swal.fire({
          icon: "error",
          title: error.message,
          showConfirmButton: true
        });
      }

    });

  }

}
