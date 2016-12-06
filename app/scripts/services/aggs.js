'use strict';

/**
 * @ngdoc service
 * @name kal3aSearchApp.aggs
 * @description
 * # aggs
 * Constant in the kal3aSearchApp.
 */
angular.module('kal3aSearchApp')
  .constant('aggs', {
      authors: { terms: { field: 'authors.name.keyword' } },
      categories: { terms: { field: 'categories.term.keyword' } },
      lang: { terms: { field: 'lang' } },
      source: { terms: { field: 'source.title.text' } }
  });
