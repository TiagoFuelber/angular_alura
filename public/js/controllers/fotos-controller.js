angular.module("alurapic").controller("FotosController", ['$scope', 'recursoFoto', function($scope, recursoFoto) {
	
	$scope.fotos = [];	
	$scope.filtro = '';
	$scope.mensagem = '';
	
	recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(erro) {
		console.log(erro);
	})

    $scope.remover = function(foto) {
		recursoFoto.delete({fotoId: foto._id}, function() {
			var indiceDaFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceDaFoto, 1);
			$scope.mensagem = 'Foto' + foto.titulo + 'deletada com sucesso';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível deletar a foto' + foto.titulo;
		});
    };
}]);	