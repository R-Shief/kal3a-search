'use strict';

/**
 * @ngdoc overview
 * @name kal3aSearchApp
 * @description
 * # kal3aSearchApp
 *
 * Main module of the application.
 */
angular
  .module('kal3aSearchApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'n3-charts.linechart',
      'elasticsearch',
      'CornerCouch',
      'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/search'
      });
  });
