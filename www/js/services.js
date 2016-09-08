var dictionary = angular.module("dictionary")
	dictionary.factory("translate",["$http",translate])


	// service
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

