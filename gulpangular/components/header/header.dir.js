angular.module("m.lotour.com").directive("headerDir",function(){

	return {
		restrict: 'E',
		templateUrl: "components/header/header.html",
		replace : true,
		controller : function( $scope ){
			$scope.title = "时尚网购";
		}

	}

})