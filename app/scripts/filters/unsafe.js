'use strict';

/**
 * @ngdoc filter
 * @name kal3aSearchApp.filter:unsafe
 * @function
 * @description
 * # unsafe
 * Filter in the kal3aSearchApp.
 */
angular.module('kal3aSearchApp')
  .filter('unsafe', ['$sce', function ($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    };
  }]);
