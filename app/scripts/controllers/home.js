'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:myctrl
 * @description
 * # myctrl
 * Controller of the projectApp
 */
angular.module('projectApp')
    .controller('myctrl', function($scope, $state) {
        $scope.btn = 'LogIn';
        $scope.pullRght = 'pull-right';
        $scope.fnChangeState = function() {
            $state.go('login');
        };
    });
