import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent { 
  private query = '';

  constructor(
    private router: Router) { }

  goToSearch(): void {
    if (this.query === '')
	  return;

    const link = ['/search', this.query];
    this.router.navigate(link);
  }
}
