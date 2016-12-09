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
        'ngSanitize',
        'ngRoute',
        'elasticui',
        'ui.bootstrap'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl',
                controllerAs: 'search'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .config(['$provide', function ($provide) {
        $provide.decorator('euiChecklistDirective', function ($delegate) {
            $delegate[0].replace = true;
            $delegate[0].template = [
                '<ul class="list-group list-unstyled facets collapse in" eui-aggregation="ejs.TermsAggregation(agg_name).field(field).size(size)">',
                '<li class="list-group-item" ng-repeat="bucket in aggResult.buckets" dir="{{ bucket.key | directionality }}">',
                '<a role="button" ng-click="filter.enabled = !filter.enabled" eui-filter="ejs.TermsFilter(field, bucket.key)" ng-model="filter.enabled">',
                '<i class="glyphicon glyphicon-remove-sign" ng-show="filter.enabled"></i> {{bucket.key}}',
                '</a>',
                '<span class="badge">{{ bucket.doc_count | number }}</span>',
                '</li>',
                '</ul>'
            ].join('');


            return $delegate;
        });
    }])
;
