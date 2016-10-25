angular.module("m.lotour.com").config(function( $stateProvider,$urlRouterProvider ){

	$stateProvider
	.state( "home",{
		templateUrl : "controllers/home/home.html",
		url : "/home",
		controller : "homeCtrl"
	})
	.state( "map",{
		templateUrl : "controllers/map/map.html",
		url : "/map",
		controller : "mapCtrl"
	})
	.state( "car",{
		templateUrl : "controllers/car/car.html",
		url : "/car",
		controller : "mapCtrl"
	})

	$urlRouterProvider.otherwise( "home" );
})