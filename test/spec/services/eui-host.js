'use strict';

describe('Service: euiHost', function () {

  // load the service's module
  beforeEach(module('kal3aSearchApp'));

  // instantiate service
  var euiHost;
  beforeEach(inject(function (_euiHost_) {
    euiHost = _euiHost_;
  }));

  it('should do something', function () {
    expect(!!euiHost).toBe(true);
  });

});
