/**
 * @ngdoc function
 * @name kal3aSearchApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the kal3aSearchApp
 */
angular.module('kal3aSearchApp')
  .controller('SearchCtrl', ['aggs', function (aggs) {
      'use strict';
      this.aggs = aggs;
      this.headings = {
          'authors.name.keyword': 'Author',
          'categories.term.keyword': 'Tag',
          'lang': 'Language',
          'source.title.text.keyword' : 'Source',
          'parameter_names.keyword' : 'Parameter Set'
      };
  }]);
