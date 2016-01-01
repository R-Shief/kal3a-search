'use strict';

/**
 * @ngdoc function
 * @name kal3aSearchApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the kal3aSearchApp
 */
angular.module('kal3aSearchApp')
  .controller('SearchCtrl', ['$scope', 'es', '$location', function ($scope, es, $location) {
      'use strict';
      var oQuery = ejs.QueryStringQuery();

      angular.forEach(['sort', 'queryTerm', 'tag', 'collection', 'published_upper', 'published_lower', 'language'], function (key) {
          $scope[key] = $location.search()[key];
          $scope.$watch(key, function (value) {
              $location.search(key, value);
          });
          //$scope.$watch(function () {
          //    return $location.search()[key];
          //}, function (value) {
          //    $scope[key] = value;
          //});
      });

      $scope.sort = '_score';
      $scope.$watch('sort', function (value, newValue) {
          if (newValue) {
              $scope.search();
          }
      });

      $scope.query = ejs.Request();

      $scope.activeFilters = {};

      if ($scope.tag) {
          $scope.activeFilters['Tags (# and meta):' + $scope.tag] = ejs.TermFilter('categories.term', $scope.tag);
      }

      if ($scope.published_lower) {
          $scope.activeFilters['Date posted:' + $scope.published_lower] = ejs.NumericRangeFilter('published')
              .from(parseInt($scope.published_lower, 10))
              .to(parseInt($scope.published_upper, 10));
      }

      if ($scope.language) {
          $scope.activeFilters['Language:' + $scope.language] = ejs.TermFilter('lang', $scope.language);
      }

      $scope.pager = {
          page: 1,
          limit: 25
      };

      $scope.query.aggregation(ejs.TermsAggregation('Language')
          .field('lang')
          .size(10));

      $scope.query.aggregation(ejs.TermsAggregation('Tags (# and meta)')
          .field('categories.term')
          .size(10));

      $scope.query.aggregation(ejs.TermsAggregation('Source')
          .field('source.title.text')
          .size(10));

      $scope.query.aggregation(ejs.TermsAggregation('Author')
          .field('authors.name')
          .size(10));

      $scope.query.aggregation(ejs.TermsAggregation('Filter Level')
          .field('extra.filter_level')
          .size(3));

      $scope.applyFilters = function (query) {

          var filters, filter;

          filter = null;
          filters = Object.keys($scope.activeFilters).map(function (k) {
              return $scope.activeFilters[k];
          });

          if (filters.length > 1) {
              filter = ejs.AndFilter(filters);
          } else if (filters.length === 1) {
              filter = filters[0];
          }

          return filter ? ejs.FilteredQuery(query, filter) : query;
      };

      $scope.search = function () {

          $scope.loading = true;

          var sort = ejs.Sort();

          if (this.sort === '_score') {
              sort.field(this.sort);
          } else {
              sort.field('published').order(this.sort);
          }

          $scope.query.sort([sort]);

          $scope.query.from(($scope.pager.page - 1) * $scope.pager.limit);
          $scope.query.size($scope.pager.limit);

          $scope.query
              .query($scope.applyFilters(oQuery.query($scope.queryTerm || '*')));

          es.search({
              body: $scope.query
          }).then(function (results) {
              $scope.results = results;
              angular.forEach(results.hits.hits, function (value, key) {

                  var thumbnailLink, authorLink, canonicalLink, alternateLink, displayLinks;
                  thumbnailLink = _.findWhere(value._source.links, {rel: 'thumbnail'}) ||
                      _.findWhere(value._source.links, {rel: 'image'}) ||
                      _.findWhere(value._source.links, {type: 'image'}) ||
                      _.findWhere(value._source.links, {rel: 'author thumbnail'}) ||
                      {href: 'http://placehold.it/96x96'};

                  authorLink = _.findWhere(value._source.links, {rel: 'author'});

                  canonicalLink = _.findWhere(value._source.links, {rel: 'canonical'});

                  alternateLink = _.findWhere(value._source.links, {rel: 'alternate'}) || _.findWhere(value._source.links, {rel: ''});

                  displayLinks = _.without(value._source.links, thumbnailLink, authorLink, canonicalLink, alternateLink);

                  angular.forEach(displayLinks, function (link) {
                      if (!link.hasOwnProperty('title')) {
                          link.title = link.href;
                      }
                      if (link.hasOwnProperty('rel') && link.rel === 'canonical') {
                          link.title = link.rel;
                      }
                  });

                  $scope.results.hits.hits[key].castleView = {
                      thumbnailLink: thumbnailLink,
                      authorLink: authorLink,
                      canonicalLink: canonicalLink,
                      alternateLink: alternateLink,
                      displayLinks: displayLinks
                  };

              });
              $scope.loading = false;
          });
      };

      $scope.search();

      $scope.isActive = function (key, term) {
          return $scope.activeFilters.hasOwnProperty(key + ':' + term);
      };

      $scope.reset = function () {
          this.activeFilters = {};
          this.pager.page = 1;
          this.pager.limit = 25;
          this.sort = '_score';
          this.queryTerm = '';
      };

      $scope.setPage = function (value) {
          this.pager.page = value;
          this.search();
      };

  }]);