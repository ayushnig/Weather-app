var app = angular.module('simpleApp', [
	'ngRoute', 
	'MainController', 
	'ngMap'
]);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'demoCtrl'
		});
		
	$locationProvider.html5Mode(true);

}]);