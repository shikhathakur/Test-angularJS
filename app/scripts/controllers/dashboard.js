'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:dashCtrl
 * @description
 * # dashCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
    .controller('dashCtrl', function($scope, $state) {
        $scope.btn = 'Logout';
        $scope.pullRght = 'pull-right';
        $scope.fnChangeStateOnLogout = function() {
            location.reload(true);
            $state.go('home');
        };
    });
