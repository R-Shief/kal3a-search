'use strict';

/**
 * @ngdoc directive
 * @name kal3aSearchApp.directive:dateHistogramAgg
 * @description
 * # dateHistogramAgg
 */
angular.module('kal3aSearchApp')
  .component('dateHistogramAgg', {
      bindings: {
          aggResult: '=',
          aggName: '='
      },
      controller: [function () {
          console.log(this);
      }],
      template: '<pre eui-aggregation="ejs.DateHistogramAggregation($ctrl.aggName).field($ctrl.field).interval(\'hour\').size(10)">{{ $ctrl | json }}</pre>'
  });
