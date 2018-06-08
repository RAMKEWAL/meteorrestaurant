import { Component } from '@angular/core';

import { Meteor } from 'meteor/meteor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'restaurant-add',
  templateUrl: 'restaurant-add.html'
})
export class RestaurantAddComponent {
  form: FormGroup;

  constructor(public fb: FormBuilder,
    public router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  submit() {
    Meteor.call('addRestaurant', this.form.value);
    this.form = null;
    this.router.navigate(['/restaurant-list'])
  }
}
