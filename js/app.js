var app = angular.module("myApp",[]);

app.controller('RegistrationController',['$scope',function($scope){


  $scope.register = function() {
    $scope.message = 'Welcome ' + $scope.user.firstName;
  };

  
  
}]);



