import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AppResponse } from 'src/app/model/app_response.model';
import { AuthService } from 'src/app/service/auth.service';
import { getAuthUser } from 'src/app/utils/shared-data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-tool-bar',
  templateUrl: './user-tool-bar.component.html',
  styleUrls: ['./user-tool-bar.component.scss']
})
export class UserToolBarComponent {

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
