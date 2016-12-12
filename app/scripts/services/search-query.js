'use strict';

/**
 * @ngdoc service
 * @name kal3aSearchApp.searchQuery
 * @description
 * # searchQuery
 * Value in the kal3aSearchApp.
 */
angular.module('kal3aSearchApp')
    .value('searchQuery', {
        queryString: '',
        published: {
            lower: '',
            upper: ''
        },
        sort: {
            field: '_score',
            order: 'desc'
        }
    });
