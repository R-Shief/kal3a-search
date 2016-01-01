'use strict';

describe('Service: es', function () {

  // load the service's module
  beforeEach(module('kal3aSearchApp'));

  // instantiate service
  var es;
  beforeEach(inject(function (_es_) {
    es = _es_;
  }));

  it('should do something', function () {
    expect(!!es).toBe(true);
  });

});
