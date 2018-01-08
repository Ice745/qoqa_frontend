import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewUserFormComponent }	from './new-user-form/new-user-form.component';

const routes: Routes = [
	{ path: '', redirectTo: '/signup',pathMatch: 'full'},
	{ path: 'signup', component: NewUserFormComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
