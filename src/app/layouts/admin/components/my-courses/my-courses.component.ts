import { Component, ViewChild } from '@angular/core';
import { FormMode, adminUrls, dialog_h_md, dialog_w_md } from '../../constants';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CourseDialogFormComponent } from '../course-dialog-form/course-dialog-form.component';
import { TranslateService } from '@ngx-translate/core';
import { ComponentUtilsService } from 'src/app/utils/components.utl.service';



export interface PeriodicElement {
  title: string;
  describtion: string;
  price: number;
  isFree: number;
  rating: number;
  enrolledStudents: number;
  image: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'JAVA for beginners', describtion: 'Hydrogen'   , price: 199.9, isFree: 0, rating: 4, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
  {title: 'JAVA for beginners', describtion: 'Helium'     , price: 199.9, isFree: 0, rating: 3.5, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
  {title: 'JAVA for beginners', describtion: 'Lithium'    , price: 199.9, isFree: 0, rating: 2, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
  {title: 'JAVA for beginners', describtion: 'Beryllium'  , price: 199.9, isFree: 0, rating: 3.5, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
  {title: 'JAVA for beginners', describtion: 'Boron'      , price: 199.9, isFree: 0, rating: 5, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
  {title: 'JAVA for beginners', describtion: 'Carbon'     , price: 199.9, isFree: 0, rating: 3.5, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
  {title: 'JAVA for beginners', describtion: 'Nitrogen'   , price: 199.9, isFree: 0, rating: 3.5, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
  {title: 'JAVA for beginners', describtion: 'Oxygen'     , price: 199.9, isFree: 0, rating: 3.5, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
  {title: 'JAVA for beginners', describtion: 'Fluorine'   , price: 199.9, isFree: 0, rating: 3.5, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
  {title: 'JAVA for beginners', describtion: 'Neon'       , price: 199.9, isFree: 0, rating: 3.5, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
  {title: 'JAVA for beginners', describtion: 'Sodium'     , price: 199.9, isFree: 0, rating: 3.5, enrolledStudents: 127, image: 'assets/images/uiux.jpeg'},
];
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent {
  ADD_COURSE_URL:string = adminUrls.addCourse;

  constructor(public dialog: MatDialog,
    private translate: TranslateService,
    private componentUtilsService: ComponentUtilsService

    ) {}

  displayedColumns: string[] = ['title', 'describtion', 'price', 'isFree', 'rating', 'enrolledStudents', 'image', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }




 






  openCreateDialog() {
    const data = {
      title: this.translate.instant('add_new_course'),
      formMode: FormMode.CREATE
    };

    this.componentUtilsService.openDialogMd(CourseDialogFormComponent, data);
  }

  openEditDialog(courseData:any) {
    const data = {
      title: this.translate.instant('edit_course'),
      formMode: FormMode.EDIT,
      courseData:courseData
    };
    this.componentUtilsService.openDialogMd(CourseDialogFormComponent, data);
  }
}
