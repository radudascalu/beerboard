import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Beer } from './beer';

@Injectable()
export class BeerSearchService {
  private beerboardApiUrl = 'http://localhost:64399/';  

  constructor(private http: Http) { }

  searchBeers(query: string): Promise<Array<Beer>> {
    const url = this.beerboardApiUrl + 'api/search?query=' + query;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
        return response.json() as Beer[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
