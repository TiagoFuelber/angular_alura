angular.module('alurapic').controller('GruposController', function($scope, $http) {
	// $scope.GruposController = 'GruposController';

	$scope.grupos = [];

	$http.get('v1/grupos')
	.success(function(grupos) {
		console.log(grupos);
		$scope.grupos = grupos;
	})
	.error(function(error) {

		console.log(error);
	});
});