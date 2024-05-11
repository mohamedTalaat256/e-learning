import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { TableComponent } from './pages/table/table.component';
import { ComponentsComponent } from './pages/components/components.component';

const routes: Routes = [
  {
    path:'user',
    component: UserComponent,
    children: [
      {path:'friends', component: FriendsComponent},
      {path:'table', component: TableComponent},
      {path:'components', component: ComponentsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
