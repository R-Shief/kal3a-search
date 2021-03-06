'use strict';

describe('Directive: atomEntry', function () {

  // load the directive's module
  beforeEach(module('kal3aSearchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<atom-entry></atom-entry>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the atomEntry directive');
  }));
});
