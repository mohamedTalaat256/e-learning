import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { FormMode, dialog_h_md, dialog_w_md } from 'src/app/constants/constants';
import { AppResponse } from 'src/app/model/app_response.model';
import { Faculty } from 'src/app/model/faculty.model';
import { FacultyService } from 'src/app/service/faculty.service';
import { ComponentUtilsService } from 'src/app/utils/components.utl.service';
import { FacultyCreateDialogComponent } from '../faculty-create-dialog/faculty-create-dialog.component';
import Swal from 'sweetalert2';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private translate: TranslateService,
    private componentUtilsService: ComponentUtilsService,
    private facultyService: FacultyService

  ) { }

  displayedColumns: string[] = ['id', 'sepicailization', 'university', 'country', 'actions'];
  dataSource = new MatTableDataSource<Faculty>(null);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    this.getAllFaculties();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getAllFaculties() {
    this.facultyService.getAll().pipe(take(1)).subscribe({
      next: (response: AppResponse) => {
        this.dataSource = new MatTableDataSource<Faculty>(response.data);
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
      title: this.translate.instant('add_new_faculty'),
      formMode: FormMode.CREATE
    };
    const dialogRef = this.dialog.open(FacultyCreateDialogComponent, {
      width: dialog_w_md,
      height: 'auto',
      data: data
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDialog(facultyData: any) {
    const data = {
      title: this.translate.instant('edit_faculty'),
      formMode: FormMode.EDIT,
      facultyData: facultyData
    };
    const dialogRef = this.dialog.open(FacultyCreateDialogComponent, {
      width: dialog_w_md,
      height: 'auto',
      data: data
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
