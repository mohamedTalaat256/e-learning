import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { profileImagesUrls } from 'src/app/constants/constants';
import { AppResponse } from 'src/app/model/app_response.model';
import { User } from 'src/app/model/user,model';
import { AuthService } from 'src/app/service/auth.service';
import { getAuthUser } from 'src/app/utils/shared-data';
import Swal from 'sweetalert2';

@Component({
  selector: 'admin-toolbar-list',
  templateUrl: './admin-toolbar-list.component.html',
  styleUrls: ['./admin-toolbar-list.component.scss']
})
export class AdminToolbarListComponent implements OnInit {


  user: any;
  profileImage:string = '';
  constructor(private authService:AuthService,private router: Router,){

  }

  ngOnInit(): void {
    this.user = getAuthUser();
  }



  logout(){
    this.authService.logout().pipe(take(1)).subscribe({
      next:(response: AppResponse)=>{
        if(response.ok){
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      },
      error:(error: AppResponse)=>{ 
        Swal.fire({ 
          icon: "error",
          title: error.message,
          showConfirmButton: true
        });
      }
    });

  }
}
