import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseOverviewComponent } from './layouts/public/course-overview/course-overview.component';

const routes: Routes = [
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/user/timeline', pathMatch: 'full' },
  { path: 'admin', redirectTo: '/admin/dashboard', pathMatch: 'full' },






  { path: 'cources/:course_id', component: CourseOverviewComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
