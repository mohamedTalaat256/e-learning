import { Component, Inject, OnInit } from '@angular/core';
import { FormMode, imagePlaceholder } from '../../../../constants/constants';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/model/course.model';

 
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
  isCourseFree: boolean=false;
  title: string;
  courseData: Course ;

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
      this.courseData = {
        title: '',
        describtion: '',
        discount: 0,
        price: 0,
        isFree: false,
        rating: 0,
        image: this.preview
      };
      this.courseForm = this.createCourseForm();
    }else{
      this.courseForm = this.setCourseForm(this.courseData);
      this.preview = this.courseData.image;
      this.isCourseFree = this.courseData.isFree;
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
        title:        [null,[Validators.required, Validators.maxLength(20), Validators.minLength(5)]],
        describtion:  [null, Validators.required, Validators.maxLength(200)],
        price:        [0, Validators.required],
        discount:     [0, ],
        isfree:       [false,  ], 
      }
    );

    return form;
  }


  setCourseForm(course: Course){
    let form = this.fb.group(
      {
       // id:         [course.id],
        title:       [course.title, [Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
        describtion: [course.describtion, [Validators.required, Validators.maxLength(200)]],
        price:       [course.price, [Validators.required]],
        discount:    [course.discount, ],
        isfree:      [course.isFree,  ], 
      }
    );

    return form;
  }

  toggleisCourseFree(){
    this.isCourseFree = !this.isCourseFree;
  }

}
