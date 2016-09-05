var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){ 
  $routeProvider
  .when('/first',{
    templateUrl: 'first.html',
    controller: 'mainController'
  })
  .when('/second',{
    templateUrl: 'second.html',
    controller: 'secondController'
  })
});


myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log){

}]);
myApp.controller('secondController', ['$scope', '$location', '$log', function($scope, $location, $log){

}]);


console.log("js test");



