'use strict';

var app = angular.module('myApp.view1', ['ngRoute', 'ngStorage']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

app.controller('View1Ctrl', ['$scope', '$localStorage', function($scope, $localStorage) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.newName = "";

    $scope.myTxt = "You have not yet clicked submit";

    $scope.myFunc = function () {

      // MAKE A SERVICE CALL
      $scope.firstName = $scope.newName;
    };

}]);