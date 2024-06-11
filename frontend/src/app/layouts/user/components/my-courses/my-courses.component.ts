import { Component, OnInit, ViewChild } from '@angular/core';
import { FormMode, adminUrls, dialog_h_md, dialog_w_md, imagesUrls } from '../../../../constants/constants';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { ComponentUtilsService } from 'src/app/utils/components.utl.service';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/courses.service';
import { take } from 'rxjs';
import { AppResponse } from 'src/app/model/app_response.model';
import Swal from 'sweetalert2';
import { StudentCourse } from 'src/app/model/StudentCourse.model';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  ADD_COURSE_URL: string = adminUrls.addCourse;
  IMAGES_URL= imagesUrls;
  StudentCoursesList: StudentCourse[];

  constructor(public dialog: MatDialog,
    private translate: TranslateService,
    private courseService: CourseService

  ) { }

  displayedColumns: string[] = ['title', 'description', 'coverImage', 'actions'];
  dataSource = new MatTableDataSource<StudentCourse>(null);

  @ViewChild(MatPaginator) paginator: MatPaginator;

 

  ngOnInit(): void {
    this.myEnrolledCourses();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  myEnrolledCourses() {
    this.courseService.myCourses().pipe(take(1)).subscribe({
      next: (response: AppResponse) => {
        this.StudentCoursesList = response.data;
        this.dataSource = new MatTableDataSource<StudentCourse>(this.StudentCoursesList);
      },
      error: (error: Error) => {
        Swal.fire({ 
          icon: "error",
          title: error.message,
          showConfirmButton: true,
         
        });
      }
    }
    );
  } 
}
