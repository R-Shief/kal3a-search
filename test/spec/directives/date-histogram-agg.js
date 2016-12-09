'use strict';

describe('Directive: dateHistogramAgg', function () {

  // load the directive's module
  beforeEach(module('kal3aSearchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<date-histogram-agg></date-histogram-agg>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dateHistogramAgg directive');
  }));
});
