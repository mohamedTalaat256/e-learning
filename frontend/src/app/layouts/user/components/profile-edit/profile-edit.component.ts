import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppResponse } from 'src/app/model/app_response.model';
import { EMPTY_PROFILE, imagePlaceholder, profileImagesUrls } from 'src/app/constants/constants';
  import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 
import { TranslateService } from '@ngx-translate/core'; 
import { COUNTRIES } from 'src/app/data/countries';
import { User } from 'src/app/model/user,model';
import { UserService } from 'src/app/service/users.service';
import { take } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';
//import { saveAs } from 'file-saver';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent {
  
  countries = COUNTRIES; 
  userId;
  user: User;
  profileForm: FormGroup;
  profileImage: File;
  showUpdateButton:boolean;
  showIsVeiled: boolean = false;
  fileStatus = { status: '', requestType: '', percent: 0 };

  preview = '';
  defaultPreview = imagePlaceholder; 
   message = '';
   constructor(
    private fb: FormBuilder,
    private userService: UserService, 
    private route: ActivatedRoute,
    private tranlate: TranslateService
  ) {  
  }

  ngOnInit(): void {
    this.profileForm = this.setProfileForm(EMPTY_PROFILE);
    this.getMyProfile();
  }

  

  getMyProfile(){
    this.userService.getMyProfile().pipe(take(1)).subscribe({
      next: (response: AppResponse) => {
        this.user = response.data;
        this.defaultPreview = profileImagesUrls+this.user.profileImage;
        this.profileForm = this.setProfileForm(this.user);
      },
      error: (error: AppResponse) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.status+" "+error.statusText 
        });
      }
    }
    );

  } 
  setProfileForm(user: any):FormGroup { 
    
      return this.fb.group(
        {
          firstName:       [user.firstName, [Validators.required, Validators.maxLength(255)]],
          lastName:        [user.lastName, [Validators.required, Validators.maxLength(255)]],
          username:        [user.username, [Validators.required, Validators.maxLength(255)]],
          email:           [user.email, [Validators.required, Validators.maxLength(255)]],
          dateOfBirth:     [user.dateOfBirth, [Validators.required, Validators.maxLength(255)]],
        //  nationality:     [user.nationality, [Validators.required, Validators.maxLength(255)]],
        //  organization:    this.fb.group({ address: this.fb.array([]) })
         
        }
      );  
  }
  
  onSubmit( ){  
     this.userService.updateProfile(this.profileForm.value).pipe(take(1)).subscribe(
      {
        next:(response: any)=>{   
          Swal.fire({ 
            icon: "success",
            title: this.tranlate.instant( response.message),
            showConfirmButton: false,
            timer: 1500
          });
        },
        error:(error: AppResponse)=>{
          Swal.fire({ 
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500
          }); 
        }
      }
    );
  }

 
  imageSelect(event:any){
    this.profileImage = (event.target as HTMLInputElement)?.files?.[0];
    
    if(this.profileImage){
      const reader = new FileReader; 
      reader.onload = (e:any)=>{
        this.defaultPreview = e.target.result;
      }
      reader.readAsDataURL(this.profileImage);
      this.showUpdateButton = true;
    }
  }
  updateImage(){

    const formData = new FormData;
    formData.append('profileImage', this.profileImage);

    this.userService.updateProfileImage(formData).subscribe(
      {
        next:(response: any)=>{
          this.resportProgress(response);
         
        },
        error:(error: AppResponse)=>{ 
          Swal.fire({ 
            icon: "error",
            title: error.message,
            showConfirmButton: false
          }); 
        }
      }
    );
  }

  private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          /* for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          } */
        } else {
         /*  saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                  {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`})); */
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';

        Swal.fire({ 
          icon: "success",
          title: 'done',
          showConfirmButton: true
        });
        this.showUpdateButton = false;

        break;
        default:
          console.log(httpEvent);
          break;
      
    }
  }

  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }
 
}