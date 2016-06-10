'use strict';

var app = angular.module('myApp.login', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])

app.controller('LoginCtrl', [ function() {

}]);