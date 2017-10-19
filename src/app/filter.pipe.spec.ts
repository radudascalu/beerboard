import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('removes beers that don\'t match the organic filter, even though the match the status filter', () => {
  	let filterOrganic = 'N';
  	let filterStatus = 'all';

  	let beers = [
  		{ id: '1', isOrganic: 'Y', status: 'valid' }, 
  		{ id: '2', isOrganic: 'N', status: 'valid' },
  		{ id: '3', isOrganic: 'Y', status: 'valid' }
  	];

  	let result = pipe.transform(beers, filterOrganic, filterStatus);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual('2');
  });

  it('removes beers that don\'t match the status filter, even though the match the organic filter', () => {
  	let filterOrganic = 'Y';
  	let filterStatus = 'update_pending';

  	let beers = [
  		{ id: '1', isOrganic: 'Y', status: 'update_pending' }, 
  		{ id: '2', isOrganic: 'Y', status: 'valid' },
  		{ id: '3', isOrganic: 'Y', status: 'valid' }
  	];

  	let result = pipe.transform(beers, filterOrganic, filterStatus);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual('1');
  });

  it('returns the same elements when both filters allow "all"', () => {
  	let filterOrganic = 'all';
  	let filterStatus = 'all';

  	let beers = [
  		{ id: '1', isOrganic: 'Y', status: 'update_pending' }, 
  		{ id: '2', isOrganic: 'N', status: 'valid' },
  		{ id: '3', isOrganic: 'N', status: 'delete_pending' }
  	];

  	let result = pipe.transform(beers, filterOrganic, filterStatus);
    expect(result.length).toEqual(3);
    expect(result[0].id).toEqual('1');
    expect(result[1].id).toEqual('2');
    expect(result[2].id).toEqual('3');
  });

  it('returns empty array when none of the beers matches both filters', () => {
  	let filterOrganic = 'Y';
  	let filterStatus = 'valid';

  	let beers = [
  		{ id: '1', isOrganic: 'Y', status: 'update_pending' }, 
  		{ id: '2', isOrganic: 'N', status: 'valid' },
  		{ id: '3', isOrganic: 'N', status: 'delete_pending' }
  	];

  	let result = pipe.transform(beers, filterOrganic, filterStatus);
    expect(result.length).toEqual(0);
  });
});