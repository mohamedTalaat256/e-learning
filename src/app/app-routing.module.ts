import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/user/timeline', pathMatch: 'full' },
  { path: 'admin', redirectTo: '/admin/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
