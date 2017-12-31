import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component'

const appRoutes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);