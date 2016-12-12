'use strict';

/**
 * @ngdoc service
 * @name kal3aSearchApp.euiHost
 * @description
 * # euiHost
 * Constant in the kal3aSearchApp.
 */
angular.module('kal3aSearchApp')
  .constant('euiHost', (function () {
      var host = window.Routing.generate('_guzzle_proxy_elasticsearch', {}, true);
      var a = document.createElement('a');
      a.href = host;
      return a.hostname + ':' + a.port;
  }()));
