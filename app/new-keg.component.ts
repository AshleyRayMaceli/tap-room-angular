import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Tap a Keg!</h3>
      <input placeholder="Brew Name" class="col-sm-8 input-lg" #newKegName>
      <input placeholder="Brand" class="col-sm-8 input-lg" #newKegBrand>
      <input placeholder="Price per Pint" class="col-sm-8 input-lg" #newKegPrice>
      <input placeholder="ABV" class="col-sm-8 input-lg" #newKegAbv>
      <button (click)="addKeg(newKegName, newKegBrand, newKegPrice, newKegAbv)">Tap</button>
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
