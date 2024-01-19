import { Component } from '@angular/core';
import { User } from 'src/app/model/user,model';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent {
  
  friends: User[] = [
    new User(1,"Ahmed Ali", "AI Engineer", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/373059958_3609761375910332_7294627911798784442_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=pb27jwtOu3EAX_jQ6wL&_nc_ht=scontent-pmo1-1.xx&oh=00_AfBwdTr_dwI2zu9_PiEj26vQcEcpliPLdETW4BZOb2zz7g&oe=65160646"),
    new User(1,"Ahmed Ali", "AI Engineer", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/373059958_3609761375910332_7294627911798784442_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=pb27jwtOu3EAX_jQ6wL&_nc_ht=scontent-pmo1-1.xx&oh=00_AfBwdTr_dwI2zu9_PiEj26vQcEcpliPLdETW4BZOb2zz7g&oe=65160646"),
    new User(1,"Ahmed Ali", "AI Engineer", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/373059958_3609761375910332_7294627911798784442_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=pb27jwtOu3EAX_jQ6wL&_nc_ht=scontent-pmo1-1.xx&oh=00_AfBwdTr_dwI2zu9_PiEj26vQcEcpliPLdETW4BZOb2zz7g&oe=65160646"),
    new User(1,"Ahmed Ali", "AI Engineer", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/373059958_3609761375910332_7294627911798784442_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=pb27jwtOu3EAX_jQ6wL&_nc_ht=scontent-pmo1-1.xx&oh=00_AfBwdTr_dwI2zu9_PiEj26vQcEcpliPLdETW4BZOb2zz7g&oe=65160646"),
    new User(1,"Ahmed Ali", "AI Engineer", "https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/373059958_3609761375910332_7294627911798784442_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=pb27jwtOu3EAX_jQ6wL&_nc_ht=scontent-pmo1-1.xx&oh=00_AfBwdTr_dwI2zu9_PiEj26vQcEcpliPLdETW4BZOb2zz7g&oe=65160646"),
  ];
}
