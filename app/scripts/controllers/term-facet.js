'use strict';

/**
 * @ngdoc function
 * @name kal3aSearchApp.controller:TermFacetCtrl
 * @description
 * # TermFacetCtrl
 * Controller of the kal3aSearchApp
 */
angular.module('kal3aSearchApp')
  .controller('TermFacetCtrl', ['$scope', 'collectionTypes', function ($scope, collectionTypes) {
      'use strict';

      $scope.typeNames = collectionTypes['bangpound_castle.types'];

      $scope.init = function (key, query) {
          $scope.key = key;
          $scope.query = query;
      };

      $scope.filter = function (key, term) {
          var aggregations, filters, filter;
          if ($scope.isActive(key, term)) {
              delete $scope.activeFilters[key + ':' + term];
          } else {
              filters = [];
              aggregations = $scope.query.aggregation()[key];
              angular.forEach(aggregations, function (facet, type) {
                  var fields;
                  fields = facet.hasOwnProperty('fields') ? facet.fields : [facet.field];
                  angular.forEach(fields, function (value) {
                      filters.push(ejs.TermFilter(value, term));
                  });
              });

              if (filters.length > 1) {
                  filter = ejs.OrFilter(filters);
              } else if (filters.length === 1) {
                  filter = filters[0];
              }
              $scope.activeFilters[key + ':' + term] = filter;
          }
          this.search();
      };
  }]);
