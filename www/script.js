  var dictionary = angular.module("dictionary",[]);

function MainController($scope,$http,$log){

  
  $scope.search = function(searchterm){
    $log.info("Searching for " + searchterm);

    var promise = $http.get("https://glosbe.com/gapi/translate?from=en&dest=eng&format=json&phrase=" + searchterm)
      promise.then(function(response){
          $scope.wordDetailsObject = response.data;
      })
    
  
          }
  
  $scope.title = "Awesome Dictionary"; 
}

 


 dictionary.controller("MainController",["$scope","$http","$log",MainController])
