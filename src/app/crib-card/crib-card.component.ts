import {Component, OnInit, Input} from '@angular/core';
import {Crib} from '../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.scss']
})
export class CribCardComponent implements OnInit {

  @Input('crib') crib: Crib;
  showDetails = false;

  constructor() {
  }

  ngOnInit() {
  }

}
