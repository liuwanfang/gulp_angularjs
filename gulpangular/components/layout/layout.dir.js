angular.module("m.lotour.com").directive("layoutDir",function(){

	return {
		restrict: 'E',
		templateUrl: "components/layout/layout.html",
		replace : true,
		controller : function( $scope ){
			$scope.title = "游网";
		}

	}

})