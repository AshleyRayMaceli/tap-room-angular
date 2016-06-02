import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-details',
  inputs: ['keg'],
  template: `
    <h3>Name: {{ keg.name }}</h3>
    <h3>Pints Left: {{ keg.pintsLeft }}</h3>
    <button (click)="sellPint(keg)" class="btn-warning btn-lg">Give me a pint!</button>
    <h3>Brand: {{ keg.brand }}</h3>
    <h3>Price: $ {{ keg.price }}</h3>
    <h3>ABV: {{ keg.abv }} %</h3>
  `
})
export class KegDetailsComponent {
  public keg: Keg;
  sellPint (newKeg: Keg): void {
    if (newKeg.pintsLeft > 0) {
      newKeg.pintsLeft -= 1;
    }
  }
}
