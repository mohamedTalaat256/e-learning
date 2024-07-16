import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{


  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService
  ){}


  ngOnInit(): void {
    
    if(this.authService.isLogedIn()){
      this.isLoggedIn = true;
    }
  }
}
