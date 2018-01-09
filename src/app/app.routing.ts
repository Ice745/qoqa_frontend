import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { NewUserFormComponent } from './pages/new-user-form/new-user-form.component'

const appRoutes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
  {
    path: 'signup',
    component: NewUserFormComponent
];

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
