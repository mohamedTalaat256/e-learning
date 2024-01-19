import { Component, ViewChild } from '@angular/core';
import { adminUrls } from '../../constants';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CourseDialogFormComponent } from '../course-dialog-form/course-dialog-form.component';



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

  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['title', 'describtion', 'price', 'isFree', 'rating', 'enrolledStudents', 'image', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }




























  openDialog() {
    const dialogRef = this.dialog.open(CourseDialogFormComponent,{
      width:'600px',   // Set width to 600px
      height:'650px',  // Set height to 530px
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
