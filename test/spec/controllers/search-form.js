'use strict';

describe('Controller: SearchFormCtrl', function () {

  // load the controller's module
  beforeEach(module('kal3aSearchApp'));

  var SearchFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchFormCtrl = $controller('SearchFormCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchFormCtrl.awesomeThings.length).toBe(3);
  });
});
