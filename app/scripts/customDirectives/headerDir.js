'use strict';

/**
 * @ngdoc function
 * @name projectApp.directive:myDirective
 * @description
 * # myDirective
 * Controller of the projectApp
 */
angular.module('projectApp')
    .directive('myDirective', function() {
        return {
            templateUrl: 'views/customDir.html',
        };
    });
