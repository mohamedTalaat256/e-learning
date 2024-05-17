import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseOverviewComponent } from './layouts/public/course-overview/course-overview.component';
import { LangingPageComponent } from './layouts/public/components/langing-page/langing-page.component';

const routes: Routes = [
  { path: '',component: LangingPageComponent },
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: 'cources/:course_id', component: CourseOverviewComponent, },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
