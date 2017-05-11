var MainController = angular.module('MainController', ['ngMap']);
MainController.controller("demoCtrl", function ($scope, $http,NgMap) {
    	$scope.items = {};
	$scope.assetName = '';
	$scope.searchWeather = function(){
    	var searchTerm = $scope.assetName;
       $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+searchTerm+'&units=metric&APPID=73136fa514890c15bc4534e7b8a1c0c4')
       .then(function(data){    
      	$scope.items = data.data.list;
		$scope.name = data.data.city; 
		$scope.coord = data.data.city.coord;
		//console.log(JSON.stringify(data));
		console.log(data.data);

        });
   }
   NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
});

