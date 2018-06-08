import { MongoObservable } from 'meteor-rxjs';

import { Restaurant } from '../models/restaurant';

export const Restaurant = new MongoObservable.Collection<Restaurant>('restaurant');
