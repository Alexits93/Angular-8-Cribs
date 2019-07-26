import {Component, ViewChild} from '@angular/core';
import {CribsService} from '../services/cribs.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html'
})
export class AddListingFormComponent {
  @ViewChild('newCribForm', {static: true}) newCribForm: NgForm;
  propertyTypes: string[] = ['House', 'Condo', 'Duplex'];

  constructor(
    public cribsService: CribsService) {}

  onCribSubmit(data): void {
    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }

}
