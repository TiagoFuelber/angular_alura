angular.module("alurapic").controller("FotosController", function($scope, $http) {
	
	var fotos = $http.get('/v1/fotos');
	fotos.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(error){
		console.log(error);
	});
});	