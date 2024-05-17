import { Component, OnInit, ViewChild } from '@angular/core';
import { FormMode, adminUrls, dialog_h_md, dialog_w_md, imagesUrls } from '../../../../constants/constants';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CourseDialogFormComponent } from '../course-dialog-form/course-dialog-form.component';
import { TranslateService } from '@ngx-translate/core';
import { ComponentUtilsService } from 'src/app/utils/components.utl.service';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/courses.service';
import { take } from 'rxjs';
import { AppResponse } from 'src/app/model/app_response.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  ADD_COURSE_URL: string = adminUrls.addCourse;
  IMAGES_URL= imagesUrls;

  constructor(public dialog: MatDialog,
    private translate: TranslateService,
    private componentUtilsService: ComponentUtilsService,
    private courseService: CourseService

  ) { }

  displayedColumns: string[] = ['title', 'description', 'price', 'isFree', 'rating', 'enrolledStudents', 'coverImage', 'actions'];
  dataSource = new MatTableDataSource<Course>(null);

  @ViewChild(MatPaginator) paginator: MatPaginator;

 

  ngOnInit(): void {
    this.getAllCources();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getAllCources() {
    this.courseService.getAll().pipe(take(1)).subscribe({
      next: (response: AppResponse) => {
        this.dataSource = new MatTableDataSource<Course>(response.data);
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
