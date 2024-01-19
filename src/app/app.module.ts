import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSideNavbarComponent } from './global/app-side-navbar/app-side-navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { AppToolbarListComponent } from './global/app-side-navbar/components/app-toolbar-list/app-toolbar-list.component';
import { AppSidenavListComponent } from './global/app-side-navbar/components/app-sidenav-list/app-sidenav-list.component';
import { UserComponent } from './layouts/user/user.component';
import { TimeLineComponent } from './layouts/user/pages/time-line/time-line.component';
import { ProfileComponent } from './layouts/user/pages/profile/profile.component';
import { TimelinePostsListComponent } from './layouts/user/components/timeline-posts-list/timeline-posts-list.component';
import { UserRoutingModule } from './layouts/user/user-routing.module';
import { FriendsComponent } from './layouts/user/pages/friends/friends.component';
import { FriendsListComponent } from './layouts/user/components/friends-list/friends-list.component';
import { AddPostFormComponent } from './layouts/user/components/add-post-form/add-post-form.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { CommentsModalComponent } from './layouts/user/components/comments-modal/comments-modal.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { AuthComponent } from './layouts/auth/auth.component'; 
import { AuthRoutingModule } from './layouts/auth/auth-routing.module';
import { TableComponent } from './layouts/user/pages/table/table.component';
import { ComponentsComponent } from './layouts/user/pages/components/components.component';
import { DashboardComponent } from './layouts/admin/components/dashboard/dashboard.component';
import { AdminRoutingModule } from './layouts/admin/admin-routing.module';
import { AdminComponent } from './layouts/admin/admin.component';
import { AdminToolbarListComponent } from './layouts/admin/global/admin-toolbar-list/admin-toolbar-list.component';
import { AdminSideNavListComponent } from './layouts/admin/global/admin-side-nav-list/admin-side-nav-list.component';
import { MyCommunityComponent } from './layouts/admin/components/my-community/my-community.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CourseDialogFormComponent  } from './layouts/admin/components/course-dialog-form/course-dialog-form.component';
import { MyCoursesComponent } from './layouts/admin/components/my-courses/my-courses.component';
import { RatingStarComponent } from './global/rating-star/rating-star.component';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AppSideNavbarComponent,
    AppToolbarListComponent,
    AdminToolbarListComponent,
    AppSidenavListComponent,
    UserComponent,
    AdminComponent,
    TimeLineComponent,
    ProfileComponent,
    TimelinePostsListComponent,
    FriendsComponent,
    FriendsListComponent,
    AddPostFormComponent,
    CommentsModalComponent,
    AuthComponent,  
    TableComponent,
    ComponentsComponent,
    DashboardComponent,
    DashboardComponent,
    AdminSideNavListComponent,
    MyCommunityComponent,
    CourseDialogFormComponent,
    MyCoursesComponent,
    RatingStarComponent
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    AuthRoutingModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    NgApexchartsModule,

    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
