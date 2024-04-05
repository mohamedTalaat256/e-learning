import { Component, OnInit, ViewChild } from '@angular/core'; 
import { MatTableDataSource } from '@angular/material/table';
import { AppResponse } from 'src/app/model/app_response.model';
import { User } from 'src/app/model/user,model';
import { UserService } from 'src/app/service/users.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: any; 

  displayedColumns: string[] = ['id', 'username', 'password', 'profile_image_url'];
  dataSource = new MatTableDataSource<User>();  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private userService: UserService){} 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.userService.getAll().subscribe({
      next:(response: AppResponse)=>{
        console.log(response);
        this.usersList = response.data;
        this.dataSource= new MatTableDataSource<User>(this.usersList);        
      },
      error:(error: Error)=>{
        console.log(error);
        //this.toastr.error(error.message);
      }
    }
    );
  }
}
