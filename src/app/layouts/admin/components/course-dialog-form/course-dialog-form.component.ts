import { Component, Inject, OnInit } from '@angular/core';
import { FormMode, imagePlaceholder } from '../../constants';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-course-dialog-form',
  templateUrl: './course-dialog-form.component.html',
  styleUrls: ['./course-dialog-form.component.scss']
})


export class CourseDialogFormComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';
  defaultPreview = imagePlaceholder;
  courseForm: FormGroup;
  formMode: FormMode;
  title: string;
  courseData: any = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder
  ) {

    console.log(data);
    this.formMode = data.formMode;
    this.title = data.title;
    this.courseData = data.courseData;
     
  }

  ngOnInit(): void {
    if (this.formMode === FormMode.CREATE) {
      this.courseData = {};
      this.courseForm = this.createCourseForm();
    }else{
      this.courseForm = this.setCourseForm(this.courseData);
      this.preview = this.courseData.image
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
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.currentFile);
      }
    }
  }


  createCourseForm(){
    let form = this.fb.group(
      {
        //id:           [null],
        title:        ['', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]],
        describtion:  [null, Validators.required, Validators.maxLength(200)],
        price:        [null, Validators.required], 
      }
    );

    return form;
  }


  setCourseForm(course){
    let form = this.fb.group(
      {
       // id:         [course.id],
        title:       [course.title, Validators.required, Validators.maxLength(5), Validators.minLength(2)],
        describtion: [course.describtion, Validators.required, Validators.maxLength(200)],
        price:       [course.price, Validators.required], 
      }
    );

    return form;
  }

}
