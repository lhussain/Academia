'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngStorage',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.login',
  'myApp.version',
  'myApp.LocalData'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

      //$routeProvider
      //    .when ('/customers', {
      //  controller: 'CustomerController',
      //  templateUrl: 'Partials/CustomersPartialView.html'
      //})
      //    .when ('/orders', {
      //  controller: 'OrderController',
      //  templateUrl: 'Partials/OrdersPartialView.html'
      //})
      //    .otherwise ({
      //  redirectTo: '/customers'
      //});
  $routeProvider.otherwise({redirectTo: '/view3'});


}]);

app.controller('InitialCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {
    $localStorage.$default({
        name: "Lomanda Salim Hussain",
        students: [
            {name: "Rasheed Waajid", present: false},
            {name: "Tariq Ali", present: false},
            {name: "Salim Hussain", present: false}
        ]
    });

    //$scope.$storage = $localStorage;

}]);
