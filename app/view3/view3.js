'use strict';

var app = angular.module('myApp.view3', ['ngRoute', 'ngStorage']);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

app.controller('View3Ctrl', ['$scope', '$localStorage', function($scope, $localStorage) {
    //$scope.presentBtn = false;
    $scope.absentBtn = false;

    $scope.buttonStyle = "btn-warning";

    //var _self = $scope;

    $scope.fullName = $localStorage.name;

    $scope.students = $localStorage.students;

    $scope.studentPresent = function(name) {
        //$scope.presentBtn = true;
        //this.student.present = !this.student.present;
        this.student.present = true;

        //this.$scope.presentBtn = true;
        //$scope.absentBtn = false;

        /**** update my local storage ****/
        $localStorage.students = $scope.students;

        console.info("clicked PRESENT");
        console.info("present student is:" + name );
        console.info("students are: %s", JSON.stringify($localStorage.students));
        //$scope.buttonStyle = "btn-danger";
        //_self.absentBtn = false;
    }

    $scope.studentAbsent = function(name) {
        this.student.present = false;

        /**** update my local storage ****/
        $localStorage.students = $scope.students;

        console.info("students are: %s", JSON.stringify($localStorage.students));

//        $scope.absentBtn = false;
//        console.info("clicked ABSENT");
//        console.info("absent student is:" + name );
        //_self.absentBtn = true;
        //_self.presentBtn = false;
    };

    //console.info("my LOCALSTORAGE name is: " + $localStorage.name);
    //console.info("my SCOPE name is: " + $scope.$storage.name);

}]);