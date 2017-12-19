angular.module('alurapic').controller('FotoController', ['$scope', 'recursoFoto', 'cadastroDeFotos', '$routeParams', function($scope, recursoFoto, cadastroDeFotos, $routeParams) {
	
    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId){
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
            $scope.foto = foto;
        }, function(erro){
            $scope.mensagem = 'Nenhuma foto encontrada';
        });
    }

    $scope.submeter = function() {
         if ($scope.formulario.$valid) {
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) $scope.foto = {};
            })
            .catch(function(dados) {
                $scope.mensagem = dados.mensagem;
            });
         }
    }; 
}]);	