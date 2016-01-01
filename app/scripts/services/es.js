'use strict';

/**
 * @ngdoc service
 * @name kal3aSearchApp.es
 * @description
 * # es
 * Service in the kal3aSearchApp.
 */
angular.module('kal3aSearchApp')
  .service('es', ['esFactory', 'fosRouting', function (esFactory, fosRouting) {
    'use strict';

    var parser = document.createElement('a');
    parser.href = fosRouting.generate('_guzzle_proxy_elasticsearch', {}, true);

    return esFactory({
      host: parser.hostname + ':' + parser.port + parser.pathname
    });
  }]);
