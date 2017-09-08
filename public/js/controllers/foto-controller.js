angular.module('alurapic').controller('FotoController', function($scope, $http) {
	
    $scope.foto = {};

    $scope.mensagem = '';

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            $http.post('/v1/fotos', $scope.foto)
            .success(function(){
                // console.log($scope.foto);
                $scope.mensagem = 'Foto cadastrada com sucesso';
                $scope.foto = {};
            })
            .error(function(erro) {
                $scope.mensagem = 'Erro ao cadastrar';
                // console.log($scope.erro);
            });
        } else {
            console.log('formulário inválido');
        }
    }; 
	
});	