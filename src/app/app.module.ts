// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// INTERCEPTORS
import { AuthenticationInterceptor } from './interceptors/auth.interceptor';

// GUARDS
import { AuthGuard } from "./guards/auth.guard";

// SERVICES
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { AlertService } from "./services/alert.service";
import { UploadImagesService } from "./services/upload-images.service";

// REUSABLE COMPONETS
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from "./components/alerts/alert.component";
import { ImageUploadComponent } from './components/image-upload/image-upload.component';

// MAIN COMPONETS
import { AppComponent } from './app.component';

import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';

import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { UsersComponent } from './pages/admin/users/users.component';
import { UsersListComponent } from './pages/admin/users/users-list/users-list.component';
import { UsersDetailsComponent } from './pages/admin/users/users-details/users-details.component';

import { ProjectsComponent } from './pages/admin/projects/projects.component';
import { ProjectsListComponent } from './pages/admin/projects/projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './pages/admin/projects/projects-details/projects-details.component';

import { ArticlesComponent } from './pages/admin/articles/articles.component';
import { ArticlesListComponent } from './pages/admin/articles/articles-list/articles-list.component';
import { ArticlesDetailsComponent } from './pages/admin/articles/articles-details/articles-details.component';

import { ServicesComponent } from './pages/admin/services/services.component';
import { ServicesListComponent } from './pages/admin/services/services-list/services-list.component';
import { ServicesDetailsComponent } from './pages/admin/services/services-details/services-details.component';

@NgModule({
  declarations: [
    AlertComponent,
    ImageUploadComponent,
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    AuthComponent,
    UsersComponent,
    UsersListComponent,
    UsersDetailsComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectsDetailsComponent,
    ArticlesComponent,
    ArticlesListComponent,
    ArticlesDetailsComponent,
    ServicesComponent,
    ServicesListComponent,
    ServicesDetailsComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthService,
    UsersService,
    UploadImagesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
