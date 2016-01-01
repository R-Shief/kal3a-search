'use strict';

describe('Filter: directionality', function () {

  // load the filter's module
  beforeEach(module('kal3aSearchApp'));

  // initialize a new instance of the filter before each test
  var directionality;
  beforeEach(inject(function ($filter) {
    directionality = $filter('directionality');
  }));

  it('should return the input prefixed with "directionality filter:"', function () {
    var text = 'angularjs';
    expect(directionality(text)).toBe('directionality filter: ' + text);
  });

});
