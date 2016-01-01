'use strict';

describe('Service: fosRouting', function () {

  // load the service's module
  beforeEach(module('kal3aSearchApp'));

  // instantiate service
  var fosRouting;
  beforeEach(inject(function (_fosRouting_) {
    fosRouting = _fosRouting_;
  }));

  it('should do something', function () {
    expect(!!fosRouting).toBe(true);
  });

});
