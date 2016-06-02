import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <h2>Edit This Brew:</h2>
    <input [(ngModel)]="keg.name" class="input-lg keg-form"/>
    <input [(ngModel)]="keg.brand" class="input-lg keg-form"/>
    <input [(ngModel)]="keg.price" class="input-lg keg-form" type="number" min=0/>
    <input [(ngModel)]="keg.abv" class="input-lg keg-form" type="number" min=0/>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
