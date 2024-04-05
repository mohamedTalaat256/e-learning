import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dialog_h_lg, dialog_h_md, dialog_w_lg, dialog_w_md } from '../constants/constants';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ComponentUtilsService {

    constructor(private dialog: MatDialog){

    }
  

    openDialogMd(component :any, data: any){
        const dialogRef = this.dialog.open(component,{
            width: dialog_w_md,  
            height: dialog_h_md,
            data:data
          });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
          });
    }


    openDialogLG(component :any, data: any){
      const dialogRef = this.dialog.open(component,{
          width: dialog_w_lg,  
          height: dialog_h_lg,
          data:data
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
  }
 
}