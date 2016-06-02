import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { KegDetailsComponent } from './keg-details.component'
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent, KegDetailsComponent],
  template: `
    <div class="container">
      <h1 class="title"><img class="dapperblook" src="resources/images/dapperblook.png">Tasty Taps for Cool Chaps</h1>
      <div class="row">
        <keg-list
          [kegList]="kegs"
          (onKegSelect)="kegWasSelected($event)">
        </keg-list>
      </div>
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
      new Keg("Double Stack", "Great Notion", 4, 7.5),
      new Keg("Dat Boi", "OSW", 11, 69.0),
      new Keg("Hypernova Triple IPA", "Ecliptic", 10, 12.0),
      new Keg("Phobos Single Hop Red Ale", "Ecliptic", 7, 5.2),
      new Keg("Sour Cherry Cider", "Woodchuck", 4, 4.2),
      new Keg("Heady Topper", "The Alchemist", 15, 8.0),
      new Keg("SwitchBOCK Keller Bier", "Switchback", 5, 7.0)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    // console.log("Parent:" + clickedKeg);
  }
}
