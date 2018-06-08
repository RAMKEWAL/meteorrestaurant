import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { Restaurant } from './../../../../imports/collections/restaurant';
import { Restaurant } from './../../../../imports/models/restaurant';

@Component({
  selector: 'restaurant-list',
  templateUrl: 'restaurant-list.html',
  styleUrls: ['restaurant-list.scss']
})
export class RestaurantListComponent implements OnInit, OnDestroy {
  restaurants: Observable<Restaurant[]>;
  restaurantListSubscription: Subscription;
  ngOnInit() {
    this.restaurantListSubscription = MeteorObservable.subscribe('restaurantList').subscribe(() => {
      this.restaurants = Restaurant.find();
    });
  }
  ngOnDestroy() {
    if (this.restaurantListSubscription) {
      this.restaurantListSubscription.unsubscribe();
    }
  }
  remove(_id: string) {
    Meteor.call('removeTodo', _id);
  }
}
