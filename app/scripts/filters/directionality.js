'use strict';

/**
 * @ngdoc filter
 * @name kal3aSearchApp.filter:directionality
 * @function
 * @description
 * # directionality
 * Filter in the kal3aSearchApp.
 */
angular.module('kal3aSearchApp')
  .filter('directionality', function () {
    return function (input) {
        var rtlChars = '\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC',
            rtlCharReg = new RegExp('[' + rtlChars + ']');

        return rtlCharReg.test(input) ? 'rtl' : 'ltr';
    };
  });
