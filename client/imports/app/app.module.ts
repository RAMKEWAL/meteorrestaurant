import { NgModule, Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'restaurant-list',
        component: RestaurantListComponent
      },
      {
        path: 'restaurant-add',
        component: RestaurantAddComponent
      },
      // Home Page
      {
        path: '',
        redirectTo: '/restaurant-list',
        pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    RestaurantAddComponent,
    RestaurantListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    FormBuilder
  ]
})
export class AppModule { }
