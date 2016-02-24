'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:viewACtrl
 * @description
 * # viewACtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
    .controller('viewACtrl', function($state, $scope, LoginService) {
        $scope.fnChangeStateOnSubmit = function(oUser) {
            LoginService.fnSetUserDetails($scope.oUser);
            $state.go('dashboard');
        };
    });
