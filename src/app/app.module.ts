import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';

//dio za upravljanje komponentama
import { RouterModule, Routes } from '@angular/router';

//dio za upravljanje komponentama
const appRoutes: Routes = [

  {
  path: 'about',
  component: AboutComponent
  },
  
  {
  path: 'home',
  component: HomeComponent
  }
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    //dio za upravljanje komponentama
    RouterModule.forRoot(appRoutes),
    //for forms
    FormsModule,
    //for animations
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }