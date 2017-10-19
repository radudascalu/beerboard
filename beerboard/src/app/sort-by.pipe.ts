import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'sortBy',
    pure: false
})
export class SortByPipe implements PipeTransform {
    transform(items: any[], field: string): any[] {
        if (!items || !field) {
            return items;
        }

        var ascending = true;
        var numeric = false;
        if (field.charAt(0) === '-') {
          ascending = false;
          field = field.substr(1);
        }
        if (field.charAt(0) === '.') {
          numeric = true;
          field = field.substr(1);
        }

        return items.sort(this.getCompareFunction(field, ascending, numeric));
    }

    getCompareFunction(field: string, ascending: boolean, numeric: boolean) {
    	return (item1, item2) => {
    		var field1 = item1[field];
    		var field2 = item2[field];

    		if (field1 == null && field2 == null)
    			return 0;
    		if (field1 == null) 
    			return ascending ? -1 : 1;
    		if (field2 == null)
    			return ascending ? 1 : -1;

    		if (numeric) {
    			return this.compareNumbers(parseFloat(field1), parseFloat(field2), ascending);
    		} else {
    			return this.compareStrings(field1, field2, ascending);
    		}
		}
    }

    compareStrings(s1: string, s2: string, ascending: boolean) {
    	var compareResult = s1.toLowerCase().localeCompare(s2.toLowerCase());
    	return ascending ? compareResult : compareResult * -1;
    }	

    compareNumbers(n1: number, n2: number, ascending: boolean) {
    	if (n1 === n2)
    		return 0;
    	else if (n1 < n2)
    		return ascending ? -1 : 1;
    	else 
    		return ascending ? 1 : -1;
    }	
}