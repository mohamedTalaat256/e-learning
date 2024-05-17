import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { CoursesComponent } from '../admin/components/courses/courses.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { userGuardService } from 'src/app/guards/usrer-guard.guard';
import { Page404Component } from 'src/app/global/page404/page404.component';

const routes: Routes = [
  {
    path:'user',
    component: UserComponent,
    children: [
      {path:'', component: UserDashboardComponent},
      {path:'edit-profile', component: ProfileEditComponent},
      {path:'dashboard', component: UserDashboardComponent},
      {path:'my-courses', component: CoursesComponent},
      {path:'enroll-to-course', component: UserDashboardComponent},
      { path: '**', pathMatch :'full' , component: Page404Component},
    ],
    canActivate: [userGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
