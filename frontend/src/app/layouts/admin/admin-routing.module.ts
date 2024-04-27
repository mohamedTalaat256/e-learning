import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyCommunityComponent } from './components/my-community/my-community.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { CourseDialogFormComponent } from './components/course-dialog-form/course-dialog-form.component';
import { UsersComponent } from './components/users/users.component';
import { authGuardService } from 'src/app/guards/auth-guard.guard';

const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children: [
      {path:'dashboard', component: DashboardComponent},
      {path:'my-comunity', component: MyCommunityComponent},
      {path:'my-courses', component: MyCoursesComponent},
      {path:'add-course', component: CourseDialogFormComponent},



      {path:'users', component: UsersComponent},
    ],
    canActivate: [authGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
