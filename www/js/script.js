

  var dictionary = angular.module("dictionary",[]);

function translate($http){
    var obj={};

    obj.makeHttpRequest = function(searchterm,source,dest){
         return $http.get("https://glosbe.com/gapi/translate?from="+source+"&dest="+dest+"&format=json&phrase=" + searchterm)
                      .then(function(response){
                        return response.data;
                      })
    }
      return obj;
}





function MainController($scope,$http,$log,translate){

    function onHindiComplete(response){
        console.dir(response.data)
        $scope.inHindi = response.data.tuc;
      }

    function onError(error){
          $scope.error = "could not fetch the results";
        }


    function onGermanComplete(data){
        console.dir(data);
        $scope.inGerman = data.tuc;

      }

      function onAngloNormanComplete(response){
        console.dir(response.data);
        $scope.inAngloNorman = response.data.tuc;

      }

    $scope.searchDE = function(searchterm){
      translate.makeHttpRequest(searchterm,"en","de"  )     
            .then(onGermanComplete,onError);

          }

          $scope.searchXNO = function(searchterm){
      $http.get("https://glosbe.com/gapi/translate?from=en&dest=xno&format=json&phrase=" + searchterm)
            .then(onAngloNormanComplete,onError);

          }

  $scope.search = function(searchterm){
  
    $log.info("Searching for " + searchterm);
    var promise = $http.get("https://glosbe.com/gapi/translate?from=en&dest=en&format=json&phrase=" +searchterm)
      promise.then(function(response){
      	console.dir(response.data);
      	$scope.object = response.data; 
        $scope.wordDetailsObject = response.data;
        $scope.array = $scope.wordDetailsObject.tuc[0].meanings;
     })



      $http.get("https://glosbe.com/gapi/translate?from=en&dest=hin&format=json&phrase=" +searchterm)
            .then(onHindiComplete,onError);
  
     
  
  
}

          
// for english to german

  $scope.title = "Awesome Dictionary"; 
}

 


 dictionary.controller("MainController",["$scope","$http","$log","translate",MainController])
 dictionary.factory("translate",["$http",translate])