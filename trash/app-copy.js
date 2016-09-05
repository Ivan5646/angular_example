var myApp = angular.module('myApp', []);

/*myApp.congig(function ($routeProvider){ ['ngRoute']
  $routeProvider
});*/

myApp.controller('mainController', ['$scope', '$location', '$log',
function($scope, $location, $log){
  $log.info($location.path());
}]);


console.log("js test");



// did not work
http://stackoverflow.com/questions/25111831/controller-not-a-function-got-undefined-while-defining-controllers-globally?noredirect=1&lq=1
(function() {
  myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log){
    $log.info($location.path());
  }]);
})();





angular.module('app', [])
.controller('ContactController', ['$scope', function ContactController($scope) {
  $scope.contacts = ["abcd@gmail.com", "abcd@yahoo.co.in"];

  $scope.add = function() {
    $scope.contacts.push($scope.newcontact);
    $scope.newcontact = "";

  };
}]);