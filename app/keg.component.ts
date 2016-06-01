import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>Name: {{ keg.name }}</h3>
    <h3>Brand: {{ keg.brand }}</h3>
    <h3>Price: $ {{ keg.price }}</h3>
    <h3>ABV: {{ keg.abv }} %</h3>
  `
})
export class KegComponent {
  public keg: Keg;
}
