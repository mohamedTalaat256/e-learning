import { Component } from '@angular/core';
import { imagePlaceholder } from '../../constants';

@Component({
  selector: 'app-course-dialog-form',
  templateUrl: './course-dialog-form.component.html',
  styleUrls: ['./course-dialog-form.component.scss']
})
export class CourseDialogFormComponent {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';
  defaultPreview = imagePlaceholder;
 
  constructor( ) {}

 

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
 
}
