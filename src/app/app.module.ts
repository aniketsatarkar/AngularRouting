import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FirstPageComponent } from './first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }