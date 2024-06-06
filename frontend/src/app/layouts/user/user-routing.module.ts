import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { userGuardService } from 'src/app/guards/usrer-guard.guard';
import { Page404Component } from 'src/app/global/page404/page404.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { BuyCourseComponent } from './components/buy-course/buy-course.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';

const routes: Routes = [
  {
    path:'user',
    component: UserComponent,
    children: [
      {path:'', component: UserDashboardComponent},
      {path:'edit-profile', component: ProfileEditComponent},
      {path:'dashboard', component: UserDashboardComponent},
      {path:'my-courses', component: MyCoursesComponent},
      {path:'my-courses/:courseId', component: CourseOverviewComponent},
      { path: 'buy-course/:courseId', component: BuyCourseComponent },
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
