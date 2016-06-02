import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { KegDetailsComponent } from './keg-details.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { PricePipe } from './price.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [PricePipe],
  directives: [KegComponent, KegDetailsComponent, NewKegComponent],
  template: `
    <div class="col-xs-6 keg-list">
      <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">Show All</option>
        <option value="expensive">Show Brews $6 And Up</option>
        <option value="cheap">Show Cheap Brews</option>
      </select>
      <h4><img src="resources/images/hops.png" class="hops"> Strong Brew (ABV 8%+)</h4>
      <h4><img src="resources/images/cheap.png" class="colorBox"> Cheaper Brew ($5 or less)</h4>
      <h4><img src="resources/images/expensive.png" class="colorBox"> Expensive Brew ($6 or more)</h4>
      <keg-display *ngFor="#currentKeg of kegList | price:filterPrice"
        (click)="kegClicked(currentKeg)"
        [class.selected]="currentKeg === selectedKeg"
        [class.expensive]="currentKeg.price > 5"
        [class.cheap]="currentKeg.price <= 5"
        [keg]="currentKeg">
      </keg-display>
    </div>
    <div *ngIf="selectedKeg" class="col-xs-6 keg-details">
      <h3>Keg Details:</h3>
      <keg-details
        [keg]="selectedKeg">
      </keg-details>
    </div>
    <div class="row">
      <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
    </div>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterPrice: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    // console.log("Child:" + clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    this.kegList.push(newKeg);
  }
  onChange(filterOption) {
    this.filterPrice = filterOption;
  }
}
