angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams) {
	
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
        
    }; 
});	