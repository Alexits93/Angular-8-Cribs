import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crib } from '../crib';
import { CribsService } from '../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html'
})
export class CribListingComponent implements OnInit {

  cribs: Crib[];
  error: string;
  sortField = 'price';
  sortDirection = 'asc';
  sortFields: string[] = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];

  constructor(
    private http: HttpClient,
    private cribsService: CribsService
    ) { }

  ngOnInit() {
    this.cribsService.getAllCribs()
    .subscribe(
      data => this.cribs = data,
      error => this.error = error.statusText
      );

    this.cribsService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    );
  }

}
