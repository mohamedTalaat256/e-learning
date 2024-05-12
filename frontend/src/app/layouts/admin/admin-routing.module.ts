import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../user/components/dashboard/dashboard.component';
import { MyCommunityComponent } from './components/my-community/my-community.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { CourseDialogFormComponent } from './components/course-dialog-form/course-dialog-form.component';
import { UsersComponent } from './components/users/users.component';
import { authGuardService } from 'src/app/guards/auth-guard.guard';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { ProfileEditComponent } from '../user/components/profile-edit/profile-edit.component';
import { UniveristiesComponent } from './components/univeristies/univeristies.component';
import { AcademicSpecializationsComponent } from './components/academic-specializations/academic-specializations.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children: [
      {path:'dashboard', component: AdminDashboardComponent},
      {path:'my-comunity', component: MyCommunityComponent},
      {path:'my-courses', component: MyCoursesComponent},
      {path:'add-course', component: CourseDialogFormComponent},
      {path:'faculties', component: FacultiesComponent},
      {path:'univeristies', component: UniveristiesComponent},
      {path:'academic-specializations', component: AcademicSpecializationsComponent},
      {path:'users', component: UsersComponent},
      {path:'edit-profile', component: ProfileEditComponent},
    ],
    canActivate: [authGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
