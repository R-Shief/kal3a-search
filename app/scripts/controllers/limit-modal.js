'use strict';

/**
 * @ngdoc function
 * @name kal3aSearchApp.controller:LimitModalCtrl
 * @description
 * # LimitModalCtrl
 * Controller of the kal3aSearchApp
 */
angular.module('kal3aSearchApp')
  .controller('LimitModalCtrl', ['$scope', '$modal', function ($scope, $modal) {
      'use strict';
      var original_limit = $scope.pager.limit;
      $scope.open = function () {
          var modalInstance = $modal.open({
              templateUrl: 'views/modal_results.html',
              controller: function ($scope, $modalInstance, pager) {
                  $scope.pager = pager;

                  $scope.ok = function () {
                      $modalInstance.close($scope.pager);
                  };

                  $scope.cancel = function () {
                      $modalInstance.dismiss('cancel');
                  };
              },
              resolve: {
                  pager: function () {
                      return $scope.pager;
                  }
              }
          });

          modalInstance.result.then(function (pager) {
              $scope.pager = pager;
              $scope.search();
          }, function () {
              $scope.pager.limit = original_limit;
          });
      };
  }]);
