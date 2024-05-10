import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AppResponse } from 'src/app/model/app_response.model';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'admin-toolbar-list',
  templateUrl: './admin-toolbar-list.component.html',
  styleUrls: ['./admin-toolbar-list.component.scss']
})
export class AdminToolbarListComponent {

  constructor(private authService:AuthService,private router: Router,){

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
