import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';

import { Restaurant } from '../../imports/collections/restaurant'

if(Meteor.isServer) {

    Router.route('/restaurant',{where: 'server'})
        .get(function(){
            var response = Restaurant.find().fetch();
            this.response.setHeader('Content-Type','application/json');
            this.response.end(JSON.stringify(response));
        })
}

 