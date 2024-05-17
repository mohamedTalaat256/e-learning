import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { CoursesComponent } from '../admin/components/courses/courses.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { userGuardService } from 'src/app/guards/usrer-guard.guard';

const routes: Routes = [
  {
    path:'user',
    component: UserComponent,
    children: [
      {path:'', component: UserDashboardComponent},
      {path:'edit-profile', component: ProfileEditComponent},
      {path:'dashboard', component: UserDashboardComponent},
      {path:'my-courses', component: CoursesComponent}
    ],
    canActivate: [userGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
