import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';

import { AdminComponent } from "./pages/admin/admin.component";
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

const routes: Routes = [
  {
    path: '',
    canActivate: [
      AuthGuard
    ],
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: 'list',
            component: UsersListComponent
          },
          {
            path: 'details/:id',
            component: UsersDetailsComponent
          }
        ]
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        children: [
          {
            path: 'list',
            component: ProjectsListComponent
          },
          {
            path: 'details/:id',
            component: ProjectsDetailsComponent
          }
        ]
      },
      {
        path: 'articles',
        component: ArticlesComponent,
        children: [
          {
            path: 'list',
            component: ArticlesListComponent
          },
          {
            path: 'details/:id',
            component: ArticlesDetailsComponent
          }
        ]
      },
      {
        path: 'services',
        component: ServicesComponent,
        children: [
          {
            path: 'list',
            component: ServicesListComponent
          },
          {
            path: 'details/:id',
            component: ServicesDetailsComponent
          }
        ]
      },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
