'use strict';

describe('Service: searchQuery', function () {

  // load the service's module
  beforeEach(module('kal3aSearchApp'));

  // instantiate service
  var searchQuery;
  beforeEach(inject(function (_searchQuery_) {
    searchQuery = _searchQuery_;
  }));

  it('should do something', function () {
    expect(!!searchQuery).toBe(true);
  });

});
