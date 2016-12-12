'use strict';

/**
 * @ngdoc directive
 * @name kal3aSearchApp.directive:atomTextConstruct
 * @description
 * # atomTextConstruct
 */
angular.module('kal3aSearchApp')
  .directive('atomTextConstruct', ['_', function (_) {
      return {
          restrict: 'E',
          link: function (scope, element) {
              var filterTags, html, type;
              filterTags = function (html) {
                  var tmp = document.createElement('DIV');
                  tmp.innerHTML = html;
                  return tmp.textContent || tmp.innerText;
              };

              if (angular.isDefined(scope.atomElement)) {

                  type = scope.atomElement.hasOwnProperty('type') ? scope.atomElement.type : 'text';

                  if (type === 'html' || type === 'xhtml') {
                      html = scope.atomElement.text;
                  } else {
                      html = '<p>' + scope.atomElement.text + '</p>';
                  }

                  html = '<p>' + _.str.prune(filterTags(html), 200, '...') + '</p>';

                  element.replaceWith(html);
              }
          }
      };
  }]);
