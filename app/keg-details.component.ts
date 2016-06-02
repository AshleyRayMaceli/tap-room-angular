import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';

@Component({
  selector: 'keg-details',
  inputs: ['keg'],
  directives: [EditKegDetailsComponent],
  template: `
    <img src="resources/images/keg.png">
    <h3><span class="details-label">Name:</span> {{ keg.name }}</h3>
    <h3><span class="details-label">Pints Left:</span> {{ keg.pintsLeft }}</h3>
    <button *ngIf="keg.pintsLeft > 0" (click)="sellPint(keg)" class="btn-warning btn-lg">Give me a pint!</button>
    <button *ngIf="keg.pintsLeft <= 10" (click)="refillKeg(keg)" class="btn-danger btn-lg">Refill keg!</button>
    <h3><span class="details-label">Brand:</span> {{ keg.brand }}</h3>
    <h3><span class="details-label">Price:</span> $ {{ keg.price }}</h3>
    <h3><span class="details-label">ABV:</span> {{ keg.abv }} %</h3>
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
  refillKeg (newKeg: Keg): void {
    newKeg.pintsLeft = 124;
  }
}
