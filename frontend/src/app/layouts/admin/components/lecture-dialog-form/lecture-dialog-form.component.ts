import { Component, Inject, OnInit } from '@angular/core';
import { FormMode, imagePlaceholder, imagesUrls } from '../../../../constants/constants';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/model/course.model';
import { CourseFormControls } from '../../form-controls/course-form';
import { CourseService } from 'src/app/service/courses.service';
import { AppResponse } from 'src/app/model/app_response.model';
import Swal from 'sweetalert2';
import { LectureFormControls } from '../../form-controls/lecture-form';
import { Lecture } from 'src/app/model/lecture.model';
import { resportProgress } from 'src/app/utils/file.utils';
import { LectureService } from 'src/app/service/lecture.service';

@Component({
  selector: 'app-lecture-dialog-form',
  templateUrl: './lecture-dialog-form.component.html',
  styleUrls: ['./lecture-dialog-form.component.scss']
})
export class LectureDialogFormComponent implements OnInit {
  selectedCoverImage?: File;
  selectedVideo?: File;

  progress = 0;
  message = '';
  preview = '';

  defaultPreview = imagePlaceholder;
  lectureForm: FormGroup;
  title: string;
  lectureData: Lecture;




  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private lectureFormControle: LectureFormControls,
  private lectureService: LectureService, private dialogRef: MatDialogRef<LectureDialogFormComponent>
) {
   
    this.title = this.data.title; 
     
  }

  ngOnInit(): void {

    if(this.data.formMode === FormMode.CREATE){
      this.lectureForm = this.lectureFormControle.createLectureForm();
      this.lectureForm.patchValue({
        course: this.data.courseId
      });

    }else{
      this.lectureData = this.data.lectureData;
      this.lectureForm = this.lectureFormControle.setLectureForm(this.lectureData);
      this.preview = imagesUrls+ this.lectureData.coverImage; 
    } 
  }
 

  selectCoverImage(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedCoverImage = event.target.files;

    if (this.selectedCoverImage) {
      const file: File | null = this.selectedCoverImage[0];

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

  selectVideo(event: any): void {
    
    this.selectedVideo = (event.target as HTMLInputElement)?.files?.[0];
    
    if(this.selectedVideo){
      const reader = new FileReader; 
      reader.onload = (e:any)=>{
        this.defaultPreview = e.target.result;
      }
      reader.readAsDataURL(this.selectedVideo);
    }
    
  }

  onSubmit(){

    this.lectureService.save(this.lectureForm.value, this.selectedCoverImage, this.selectedVideo).subscribe({
      next:(response: any)=>{  
        if(response.ok){

          resportProgress(response);
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

  }}
