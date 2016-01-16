'use strict';

describe('Service: aggs', function () {

  // load the service's module
  beforeEach(module('kal3aSearchApp'));

  // instantiate service
  var aggs;
  beforeEach(inject(function (_aggs_) {
    aggs = _aggs_;
  }));

  it('should do something', function () {
    expect(!!aggs).toBe(true);
  });

});
