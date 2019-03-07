

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { DataService } from './data.service';

const appRoutes : Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:UserdashboardComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,LoginComponent,UserdashboardComponent
  ],
  imports: [

// RouterModule.forRoot(appRoutes),
RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDvjfpnQ2uJ7Wsfrdy8TAXz_uFO6q9In_A'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
