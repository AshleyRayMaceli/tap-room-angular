import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { KegDetailsComponent } from './keg-details.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, KegDetailsComponent, NewKegComponent],
  template: `
    <div class="col-xs-6 keg-list">
      <keg-display *ngFor="#currentKeg of kegList"
        (click)="kegClicked(currentKeg)"
        [class.selected]="currentKeg === selectedKeg"
        [keg]="currentKeg">
      </keg-display>
      <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
    </div>
    <div *ngIf="selectedKeg" class="col-xs-6 keg-details">
      <h3>Keg Details:</h3>
      <keg-details
        [keg]="selectedKeg">
      </keg-details>
    </div>
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
  createKeg(newKeg: Keg): void {
    this.kegList.push(newKeg);
  }
}
