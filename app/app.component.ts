import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Turtle Tap Room</h1>
      <h3 *ngFor="#keg of kegs">
        {{ keg.name }}
      </h3>
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
}

export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number) {

  }
}
