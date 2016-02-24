'use strict';

/**
 * @ngdoc function
 * @name projectApp.service:LoginService
 * @description
 * # LoginService
 * Controller of the projectApp
 */
angular.module('projectApp')
    .service('LoginService', function() {
        var oUserData = {};

        function fnSetUserDetails(oUser) {
            oUserData = oUser;
            console.log(oUserData);
        }
        return {
            fnGetUserDetails: function() {
                return oUserData.mailId
            },
            fnSetUserDetails: fnSetUserDetails
        };
    });
