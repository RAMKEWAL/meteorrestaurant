import { Meteor } from 'meteor/meteor';
import { Restaurant } from './../../../imports/collections/restaurant';

Meteor.methods({
  addRestaurant(data: any) {
    Restaurant.insert(data);
  },
  
  removeRestaurant(_id: string) {
    Restaurant.remove({
      _id
    })
  }
})
