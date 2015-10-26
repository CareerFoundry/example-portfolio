var app = angular.module('cf', []);

app.controller('EasterEgg', ['$scope', function($scope){
  $scope.output = "This is a sample page. Not much more to see... ";

  var storyProgress = 0;

  $scope.enterInput = function(){

    if($scope.input.toLowerCase() == "hi" && storyProgress == 0){
      $scope.output = "Hi! What's your name?"
      storyProgress = 1;
    }else if(storyProgress == 1){
      $scope.output = "Hi there, " + $scope.input + "!";
      storyProgress = 2;
    };

    $scope.input = '';
    console.log(storyProgress);
  };
}]);
