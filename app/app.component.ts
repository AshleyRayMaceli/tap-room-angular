import { Component, EventEmitter } from 'angular2/core';

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

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList"
      (click)="kegClicked(currentKeg)"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("Child:" + clickedKeg);
    this.selectedKeg = clickedKeg;
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
