import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  template: `
    <h3 *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">
      {{ currentKeg.name }}
    </h3>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("Child:" + clickedKeg);
    this.onKegSelect.emit(clickedKeg);
  }
}

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Turtle Tap Room</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Marionberry Braggot", "Rogue", 7, 11.4),
      new Keg("Mocha Porter", "Rogue", 5, 5.6),
      new Keg("Juice Box", "Great Notion", 8, 8.2),
      new Keg("Double Stack", "Great Notion", 4, 7.5)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log("Parent:" + clickedKeg);
  }
}

export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number) {

  }
}
