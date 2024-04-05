import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component'; 

const routes: Routes = [
  {
    path:'login',
    component: AuthComponent,
    children: [{path:'', component: AuthComponent}]
  },
  {
    path:'register',
    component: AuthComponent,
    children: [{path:'', component: AuthComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
