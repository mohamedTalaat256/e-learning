import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AdminComponent } from './admin.component';
import { MyCommunityComponent } from './components/my-community/my-community.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDialogFormComponent } from './components/course-dialog-form/course-dialog-form.component';
import { UsersComponent } from './components/users/users.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { UniveristiesComponent } from './components/univeristies/univeristies.component';
import { AcademicSpecializationsComponent } from './components/academic-specializations/academic-specializations.component';
import { ProfileEditComponent } from '../user/components/profile-edit/profile-edit.component';
import { adminGuardService } from 'src/app/guards/admin-guard.guard';
import { Page404Component } from 'src/app/global/page404/page404.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children: [
      {path:'dashboard', component: AdminDashboardComponent},
      {path:'my-comunity', component: MyCommunityComponent},
      {path:'courses', component: CoursesComponent},
      {path:'add-course', component: CourseDialogFormComponent},
      {path:'faculties', component: FacultiesComponent},
      {path:'univeristies', component: UniveristiesComponent},
      {path:'academic-specializations', component: AcademicSpecializationsComponent},
      {path:'users', component: UsersComponent},
      {path:'edit-profile', component: ProfileEditComponent},
      { path: '**', pathMatch :'full' , component: Page404Component},
    ],
    canActivate: [adminGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
