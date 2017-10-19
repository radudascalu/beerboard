import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Beer } from './beer';
import { BeerSearchService } from './beer-search.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  beers: Beer[];
  query: string;
  error: any;
  sortBy: string;
  filterOrganic = 'all';
  filterStatus = 'all';
  isLoading = false;
  
  constructor(
    private beerSearchService: BeerSearchService,
    private route: ActivatedRoute) { }

  sortOptions = [
    { value: 'name', text: 'Name ascending' },
    { value: '-name', text: 'Name descending' },
    { value: '.abv', text: 'Alcohol % ascending' },
    { value: '-.abv', text: 'Alcohol % descending' }
  ];

  organicOptions = [
  	{ value: 'all', text: 'All' },
  	{ value: 'Y', text: 'Organic only' },
  	{ value: 'N', text: 'Non-organic only' }
  ];

  statusOptions = [
  	{ value: 'all', text: 'All' },
  	{ value: 'verified', text: 'Verified' },
  	{ value: 'update_pending', text: 'Update pending' },
  	{ value: 'delete_pending', text: 'Delete pending' }
  ];

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['q'] !== undefined) {
        this.query = params['q'];
        this.search();
      }
    });
  }

  search(): void {
  	this.isLoading = true;
  	this.filterOrganic = 'all';
	  this.filterStatus = 'all';
    this.sortBy = undefined;
  	this.beerSearchService
        .searchBeers(this.query)
        .then(beers => {
          this.beers = beers;
          this.isLoading = false;
        })
        .catch(error => { 
          this.error = error; // TODO: Display error message
          this.isLoading = false;
        });
    }
}
