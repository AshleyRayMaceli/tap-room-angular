import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';

@Component({
  selector: 'keg-details',
  inputs: ['keg'],
  directives: [EditKegDetailsComponent],
  template: `
    <h3>Name: {{ keg.name }}</h3>
    <h3>Pints Left: {{ keg.pintsLeft }}</h3>
    <button *ngIf="keg.pintsLeft > 0" (click)="sellPint(keg)" class="btn-warning btn-lg">Give me a pint!</button>
    <h3>Brand: {{ keg.brand }}</h3>
    <h3>Price: $ {{ keg.price }}</h3>
    <h3>ABV: {{ keg.abv }} %</h3>
    <edit-keg-details [keg]="keg"></edit-keg-details>
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
