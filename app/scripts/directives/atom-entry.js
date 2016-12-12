'use strict';

/**
 * @ngdoc directive
 * @name kal3aSearchApp.directive:atomEntry
 * @description
 * # atomEntry
 */
angular.module('kal3aSearchApp')
    .component('atomEntry',  {
        bindings: {
            entry: '='
        },
        controller: ['_', 'moment', function (_, moment) {
            this.$onInit = function () {


                var thumbnailLink, authorLink, canonicalLink, alternateLink, displayLinks;
                thumbnailLink = _.findWhere(this.entry.links, {rel: 'thumbnail'}) ||
                    _.findWhere(this.entry.links, {rel: 'image'}) ||
                    _.findWhere(this.entry.links, {type: 'image'}) ||
                    _.findWhere(this.entry.links, {rel: 'author thumbnail'}) ||
                    {href: 'http://placehold.it/96x96'};

                authorLink = _.findWhere(this.entry.links, {rel: 'author'});

                canonicalLink = _.findWhere(this.entry.links, {rel: 'canonical'});

                alternateLink = _.findWhere(this.entry.links, {rel: 'alternate'}) || _.findWhere(this.entry.links, {rel: ''});

                displayLinks = _.without(this.entry.links, thumbnailLink, authorLink, canonicalLink, alternateLink);

                angular.forEach(displayLinks, function (link) {
                    if (!link.hasOwnProperty('title')) {
                        link.title = link.href;
                    }
                    if (link.hasOwnProperty('rel') && link.rel === 'canonical') {
                        link.title = link.rel;
                    }
                });

                this.castleView = {
                    published: moment(this.entry.published).toDate(),
                    thumbnailLink: thumbnailLink,
                    authorLink: authorLink,
                    canonicalLink: canonicalLink,
                    alternateLink: alternateLink,
                    displayLinks: displayLinks
                };
            }
        }],
        template: function () {
            return [
                '<div class="media well well-sm">',

                '<div class="media-left">',
                '<img ng-src="{{$ctrl.castleView.thumbnailLink.href}}" alt="{{$ctrl.entry.name}}" width="200" class="media-object" />',
                '</div>',

                '<div class="media-body">',
                '<p class="author">',
                '<a ng-if="$ctrl.castleView.authorLink" ng-href="{{ $ctrl.castleView.authorLink.href }}" target="_blank">',
                '{{ $ctrl.entry.authors[0].name }}',
                '</a>',
                '<span ng-if="!$ctrl.castleView.authorLink">{{ $ctrl.entry.authors[0].name }}</span>',
                '</p>',

                '<p>',
                '{{ $ctrl.entry.source.title.text }}',
                '<span>{{ $ctrl.castleView.published | date:\'medium\' }}</span>',
                '</p>',

                '<p>',
                '<a ng-if="$ctrl.castleView.alternateLink" ng-href="{{ $ctrl.castleView.alternateLink.href }}" target="_blank">',
                '{{ $ctrl.entry.title.text | unsafe }}',
                '</a>',
                '<span ng-if="!$ctrl.castleView.alternateLink">{{ $ctrl.entry.title.text | unsafe }}</span>',
                '<small ng-show="$ctrl.castleView.canonicalLink">',
                '<a ng-href="{{ $ctrl.castleView.canonicalLink.href }}" target="_blank">',
                '<i class="glyphicon glyphicon-link"></i>',
                '</a>',
                '</small>',
                '</p>',
                '<atom-text-construct ng-model="$ctrl.entry.summary"></atom-text-construct>',
                '<ul>',
                '<li ng-repeat="link in $ctrl.castleView.displayLinks">',
                '{{ link.rel }} <a rel="{{ link.rel }}" ng-href="{{ link.href }}" target="_blank">{{ link.title }}</a>',
                '</li>',
                '</ul>',
                '</div>',
                '</div>'
            ].join(' ');
        }
    });
