'use strict';

describe('Controller: TermFacetCtrl', function () {

  // load the controller's module
  beforeEach(module('kal3aSearchApp'));

  var TermFacetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermFacetCtrl = $controller('TermFacetCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TermFacetCtrl.awesomeThings.length).toBe(3);
  });
});
