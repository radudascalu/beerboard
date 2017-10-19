import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  query: string;
  sortBy: string;
  filterOrganic = 'all';
  filterStatus = 'all';
  
  constructor(
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
  }
}
