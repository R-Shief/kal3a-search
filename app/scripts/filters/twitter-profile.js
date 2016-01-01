'use strict';

/**
 * @ngdoc filter
 * @name kal3aSearchApp.filter:twitterProfile
 * @function
 * @description
 * # twitterProfile
 * Filter in the kal3aSearchApp.
 */
angular.module('kal3aSearchApp')
  .filter('twitterProfile', function () {
    return function (input) {
        return input.default_profile_image ? 'http://robohash.org/' + input.screen_name + '.png' : input.profile_image_url;
    };
  });
