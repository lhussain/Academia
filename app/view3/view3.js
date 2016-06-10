'use strict';

var app = angular.module('myApp.view3', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

app.controller('View3Ctrl', [ function() {

}]);