import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

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
