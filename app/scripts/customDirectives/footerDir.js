'use strict';

/**
 * @ngdoc function
 * @name projectApp.directive:footerDirective
 * @description
 * # footerDirective
 * Controller of the projectApp
 */
angular.module('projectApp')
    .directive('footerDirective', function() {
        return {
            scope: {
                btn: '=buttoname',
                pullRght: '@',
            },
            template: '<button >{{btn}}</button>',
            replace: true,
        };
    });
