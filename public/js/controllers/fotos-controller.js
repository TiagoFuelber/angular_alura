angular.module("alurapic").controller("FotosController", function($scope, $http) {
	
	$scope.mensagem = '';	
	
	var fotos = $http.get('/v1/fotos');
	fotos.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(error){
		console.log(error);
	});

    $scope.remover = function(foto) {
		$http.delete('v1/fotos/' + foto._id)
		.success(function(){
			var indice = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indice, 1);
			$scope.mensagem = 'Foto deletada com sucesso';
		})
		.error(function(erro) {
			console.log(erro);
			$scope.mensagem = 'Erro ao excluir foto';
		});
    }
});	