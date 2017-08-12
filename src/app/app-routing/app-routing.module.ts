import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { FirstPageComponent } from './../first-page/first-page.component';

const routes: Routes = 
[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'first',
    component: FirstPageComponent
  },
];

@NgModule({
  imports: [
    //CommonModule
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations:[
  ]
})
export class AppRoutingModule { }