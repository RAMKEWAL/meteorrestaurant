import { Meteor } from 'meteor/meteor';
import { Restaurant } from './../../../imports/collections/restaurant';

Meteor.publish('restaurantList', function() {
  return Restaurant.find({});
});
