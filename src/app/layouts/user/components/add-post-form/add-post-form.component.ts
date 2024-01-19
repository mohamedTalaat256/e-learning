import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent {
  
  isLoading: boolean =false;
  
  user ={
    username: 'Mohamed Talaat',
    profile_image_url: 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'
  }
}
