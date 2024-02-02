import { Component, ViewChild } from '@angular/core';
import { FormMode, adminUrls, dialog_h_md, dialog_w_md } from '../../../../constants/constants';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CourseDialogFormComponent } from '../course-dialog-form/course-dialog-form.component';
import { TranslateService } from '@ngx-translate/core';
import { ComponentUtilsService } from 'src/app/utils/components.utl.service';
import { Course } from 'src/app/model/course.model';

const ELEMENT_DATA: Course[] = [
  { 
    title: 'JAVA for beginners', 
    describtion: 'Hydrogen', 
    price: 199.9,
    discount: 12,
    isFree: false, 
    rating: 4, 
    enrolledStudents: 127,
    image: 'assets/images/uiux.jpeg'
  
  },
  { title: 'Data Structure And Algorithm', describtion: 'Helium', price: 199.9, discount: 0,isFree: true, rating: 3.5, enrolledStudents: 127, image: 'assets/images/uiux.jpeg' },
  { title: 'Mastering Dev Ops', describtion: 'Lithium', price: 199.9,discount: 2, isFree: false, rating: 2, enrolledStudents: 127, image: 'assets/images/uiux.jpeg' },
];
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent {
  ADD_COURSE_URL: string = adminUrls.addCourse;

  constructor(public dialog: MatDialog,
    private translate: TranslateService,
    private componentUtilsService: ComponentUtilsService

  ) { }

  displayedColumns: string[] = ['title', 'describtion', 'price', 'isFree', 'rating', 'enrolledStudents', 'image', 'actions'];
  dataSource = new MatTableDataSource<Course>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

 

  openCreateDialog() {
    const data = {
      title: this.translate.instant('add_new_course'),
      formMode: FormMode.CREATE
    };

    this.componentUtilsService.openDialogLG(CourseDialogFormComponent, data);
  }

  openEditDialog(courseData: any) {
    const data = {
      title: this.translate.instant('edit_course'),
      formMode: FormMode.EDIT,
      courseData: courseData
    };
    this.componentUtilsService.openDialogLG(CourseDialogFormComponent, data);
  }
}
