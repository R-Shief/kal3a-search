'use strict';

/**
 * @ngdoc filter
 * @name kal3aSearchApp.filter:badDate
 * @function
 * @description
 * # badDate
 * Filter in the kal3aSearchApp.
 */
angular.module('kal3aSearchApp')
  .filter('badDate', ['moment', function (moment) {
    return function (input) {
        return moment(input).toDate();
    };
  }]);
