import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'forgot-password', loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) }, { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) }, { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, { path: 'users', loadChildren: () => import('./layouts/users/users.module').then(m => m.UsersModule) }, { path: 'admin', loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
