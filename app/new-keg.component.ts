import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Tap a Keg!</h3>
      <input placeholder="Brew Name" class="input-lg" #newKegName>
      <input placeholder="Brand" class="input-lg" #newKegBrand>
      <input placeholder="Price per Pint" class="input-lg" #newKegPrice>
      <input placeholder="ABV" class="input-lg" #newKegAbv>
      <br>
      <button (click)="addKeg(newKegName, newKegBrand, newKegPrice, newKegAbv)" class="btn-info btn-lg add-button">Tap It!</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userKegName: HTMLInputElement, userKegBrand: HTMLInputElement, userKegPrice: HTMLInputElement, userKegAbv: HTMLInputElement){

    var newKeg = new Keg(userKegName.value, userKegBrand.value, parseInt(userKegPrice.value), parseInt(userKegAbv.value));
    this.onSubmitNewKeg.emit(newKeg);
    userKegName.value = "";
    userKegBrand.value = "";
    userKegPrice.value = "";
    userKegAbv.value = "";
  }
}
