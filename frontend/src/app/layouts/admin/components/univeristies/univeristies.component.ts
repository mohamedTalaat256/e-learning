import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { FormMode, dialog_w_md } from 'src/app/constants/constants';
import { AppResponse } from 'src/app/model/app_response.model';
import { University } from 'src/app/model/university.model';
import { FacultyService } from 'src/app/service/faculty.service';
import { UniversityService } from 'src/app/service/univeristy.service';
import { ComponentUtilsService } from 'src/app/utils/components.utl.service';
import Swal from 'sweetalert2';
import { UniveristyFormDialogComponent } from '../univeristy-form-dialog/univeristy-form-dialog.component';
import { COUNTRIES } from 'src/app/data/countries';

@Component({
  selector: 'app-univeristies',
  templateUrl: './univeristies.component.html',
  styleUrls: ['./univeristies.component.scss']
})
export class UniveristiesComponent implements OnInit {


  displayedColumns: string[] = ['id', 'name', 'country', 'actions'];
  dataSource = new MatTableDataSource<University>(null);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,
    private translate: TranslateService, 
    private unversityService: UniversityService

  ) { }


  ngOnInit(): void {
    this.getAllFaculties();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getAllFaculties() {
    this.unversityService.getAll().pipe(take(1)).subscribe({
      next: (response: AppResponse) => {
        this.dataSource = new MatTableDataSource<University>(response.data);
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
      title: this.translate.instant('add_new_university'),
      formMode: FormMode.CREATE
    };
    const dialogRef = this.dialog.open(UniveristyFormDialogComponent, {
      width: dialog_w_md,
      height: 'auto',
      data: data
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDialog(universityData: any) {
    const data = {
      title: this.translate.instant('edit_university'),
      formMode: FormMode.EDIT,
      universityData: universityData
    };
    const dialogRef = this.dialog.open(UniveristyFormDialogComponent, {
      width: dialog_w_md,
      height: 'auto',
      data: data
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
