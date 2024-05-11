import { Component, OnInit, ViewChild } from '@angular/core'; 
import { MatTableDataSource } from '@angular/material/table';
import { AppResponse } from 'src/app/model/app_response.model';
import { User } from 'src/app/model/user,model';
import { UserService } from 'src/app/service/users.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { take } from 'rxjs';
import { imagePlaceholder, profileImagesUrls } from 'src/app/constants/constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: any; 

  profileImageUrls = profileImagesUrls;
  defaultImage = imagePlaceholder;
  displayedColumns: string[] = ['id','name', 'email', 'roles', 'enabled', 'actions'];
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
    this.userService.getAll().pipe(take(1)).subscribe({
      next:(response: AppResponse)=>{
        console.log(response);
        this.usersList = response.data;
        this.dataSource= new MatTableDataSource<User>(this.usersList);        
      },
      error:(error: Error)=>{
        console.log(error); 
      }
    }
    );
  }
}
