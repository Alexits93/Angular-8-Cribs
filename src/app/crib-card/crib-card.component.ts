import {Component, Input} from '@angular/core';
import {Crib} from '../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html'
})
export class CribCardComponent {

  @Input('crib') crib: Crib;
  showDetails = false;

  constructor() {
  }
}
