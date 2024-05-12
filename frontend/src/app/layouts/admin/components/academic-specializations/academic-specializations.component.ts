import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { FormMode, dialog_w_md } from 'src/app/constants/constants';
import { AcademicSepicailization } from 'src/app/model/academic-sepicailization.model';
import { AppResponse } from 'src/app/model/app_response.model';
import { AcademicSpecializationService } from 'src/app/service/academicSpecialization.service';
import Swal from 'sweetalert2';
import { AcademicSpecializationFormDialogComponent } from '../academic-specialization-form-dialog/academic-specialization-form-dialog.component';

@Component({
  selector: 'app-academic-specializations',
  templateUrl: './academic-specializations.component.html',
  styleUrls: ['./academic-specializations.component.scss']
})
export class AcademicSpecializationsComponent implements OnInit {

  academicSpecializationsList: AcademicSepicailization[] =[];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<AcademicSepicailization>(null);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,
    private translate: TranslateService, 
    private academicSpecializationService: AcademicSpecializationService
  ) { }



  ngOnInit(): void {
    this.getAllSpecializations();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getAllSpecializations() {
    this.academicSpecializationService.getAll().pipe(take(1)).subscribe({
      next: (response: AppResponse) => {
        this.academicSpecializationsList = response.data;
        this.dataSource = new MatTableDataSource<AcademicSepicailization>(this.academicSpecializationsList);
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
      title: this.translate.instant('add_new_academic_specialization'),
      formMode: FormMode.CREATE
    };
    const dialogRef = this.dialog.open(AcademicSpecializationFormDialogComponent, {
      width: dialog_w_md,
      height: 'auto',
      data: data
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      this.academicSpecializationsList.push(result);
      this.dataSource = new MatTableDataSource<AcademicSepicailization>(this.academicSpecializationsList);
      console.log(result);
    });
  }

  openEditDialog(universityData: any) {
    const data = {
      title: this.translate.instant('edit_academic_specialization'),
      formMode: FormMode.EDIT,
      universityData: universityData
    };
    const dialogRef = this.dialog.open(AcademicSpecializationFormDialogComponent, {
      width: dialog_w_md,
      height: 'auto',
      data: data
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
