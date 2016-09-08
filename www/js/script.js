

var dictionary = angular.module("dictionary",[]);
dictionary.controller("MainController",["$scope","$http","$log","translate",MainController])


function MainController($scope,$http,$log,translate){
//functions begin
    function onError(error){
          $scope.error = "could not fetch the results";
        }

       function onComplete(data){
        console.dir(data);
        $scope.Data = data.tuc;
      }

//functions ended

    $scope.search = function(searchterm,src,dest){
      translate.makeHttpRequest(searchterm,src,dest)     
              .then(onComplete,onError);
          }


// search functions ended

// scope properties
  $scope.title = "Awesome Dictionary- The multilingual online dictionary";
  $scope.src="eng";
  $scope.dest="hin";

}


