'use strict';

describe('Filter: badDate', function () {

  // load the filter's module
  beforeEach(module('kal3aSearchApp'));

  // initialize a new instance of the filter before each test
  var badDate;
  beforeEach(inject(function ($filter) {
    badDate = $filter('badDate');
  }));

  it('should return the input prefixed with "badDate filter:"', function () {
    var text = 'angularjs';
    expect(badDate(text)).toBe('badDate filter: ' + text);
  });

});
