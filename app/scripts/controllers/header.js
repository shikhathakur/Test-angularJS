'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:headerCtrl
 * @description
 * # headerCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
    .controller('headerCtrl', function($scope, LoginService) {
        $scope.fnData = function() {
            $scope.sUsername = LoginService.fnGetUserDetails();
            console.log($scope.sUsername);
        };
    });
