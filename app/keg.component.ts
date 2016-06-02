import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>{{ keg.name }} <img *ngIf="keg.abv >= 8" src="resources/images/hops.png" class="hops"> <img *ngIf="keg.pintsLeft <= 10" src="resources/images/warning.png" class="warning"></h3>
  `
})
export class KegComponent {
  public keg: Keg;
}
