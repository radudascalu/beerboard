import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filterOrganic: string, filterStatus: string): any {
        if (!items) {
            return items;
        }

        return items.filter(item => this.filter(item, filterOrganic, filterStatus));
    }

    filter(beer, filterOrganic, filterStatus) {
  		if (filterOrganic !== 'all' && filterOrganic !== beer.isOrganic)
  			return false;
  	
  		if (filterStatus !== 'all' && filterStatus !== beer.status)
  			return false;

  		return true;
    }
}