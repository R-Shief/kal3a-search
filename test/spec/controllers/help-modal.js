'use strict';

describe('Controller: HelpModalCtrl', function () {

  // load the controller's module
  beforeEach(module('kal3aSearchApp'));

  var HelpModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelpModalCtrl = $controller('HelpModalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HelpModalCtrl.awesomeThings.length).toBe(3);
  });
});
