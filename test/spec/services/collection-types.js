'use strict';

describe('Service: collectionTypes', function () {

  // load the service's module
  beforeEach(module('kal3aSearchApp'));

  // instantiate service
  var collectionTypes;
  beforeEach(inject(function (_collectionTypes_) {
    collectionTypes = _collectionTypes_;
  }));

  it('should do something', function () {
    expect(!!collectionTypes).toBe(true);
  });

});
