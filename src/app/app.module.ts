import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DataServiceService } from './data-service.service';
import { ApiServiceService } from './api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [DataServiceService,ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
