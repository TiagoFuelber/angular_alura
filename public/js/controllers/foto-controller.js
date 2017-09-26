angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {
	
    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId){
        $http.get('/v1/fotos/' + $routeParams.fotoId)
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(erro){
            $scope.mensagem = 'Nenhuma foto encontrada';
        });
    }

    $scope.submeter = function() {
        if ($scope.foto._id) {
            if ($scope.formulario.$valid) {
                $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                    .success(function(response){
                        console.log(response);
                        $scope.mensagem = 'Foto cadastrada com sucesso';
                        $scope.foto = {};
                        $scope.formulario.$setPristine()
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Erro ao cadastrar';
                    }); 
            } else {
                console.log('formulário inválido');
            }
        } else {
            $http.post('/v1/fotos', $scope.foto)
            .success(function(response) {
                console.log(response);
                $scope.mensagem = 'Foto atualizada com sucesso';
                $scope.foto = {};
                $scope.formulario.$setPristine()
            })
            .error(function(erro) {
                console.log(erro);
            });
        }
    }; 
});	