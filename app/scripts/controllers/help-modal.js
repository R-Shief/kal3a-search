/**
 * @ngdoc function
 * @name kal3aSearchApp.controller:HelpModalCtrl
 * @description
 * # HelpModalCtrl
 * Controller of the kal3aSearchApp
 */
angular.module('kal3aSearchApp')
  .controller('HelpModalCtrl', ['$scope', '$modal', function ($scope, $modal) {
      'use strict';
      $scope.open = function () {

          var modalInstance = $modal.open({
              templateUrl: 'views/modal_help.html',
              controller: function ($scope, $modalInstance) {
                  $scope.ok = function () {
                      $modalInstance.dismiss('ok');
                  };
              }
          });
          modalInstance.result.then();
      };
  }]);
