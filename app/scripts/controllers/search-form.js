'use strict';

/**
 * @ngdoc function
 * @name kal3aSearchApp.controller:SearchFormCtrl
 * @description
 * # SearchFormCtrl
 * Controller of the kal3aSearchApp
 */
angular.module('kal3aSearchApp')
  .controller('SearchFormCtrl', ['searchQuery', function (searchQuery) {
      this.query = searchQuery;
      this.search = function () {
      };
  }]);
