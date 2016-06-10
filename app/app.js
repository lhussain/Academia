'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.login',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
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
