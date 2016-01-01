'use strict';

describe('Filter: twitterProfile', function () {

  // load the filter's module
  beforeEach(module('kal3aSearchApp'));

  // initialize a new instance of the filter before each test
  var twitterProfile;
  beforeEach(inject(function ($filter) {
    twitterProfile = $filter('twitterProfile');
  }));

  it('should return the input prefixed with "twitterProfile filter:"', function () {
    var text = 'angularjs';
    expect(twitterProfile(text)).toBe('twitterProfile filter: ' + text);
  });

});
