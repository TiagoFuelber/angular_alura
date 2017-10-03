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
        if ($scope.foto._id) {
            if ($scope.formulario.$valid) {
                
                recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function() {   
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                    $scope.foto = {};
                    $scope.formulario.$setPristine()
                }, function() {
                    console.log(erro);
                    $scope.mensagem = 'Erro ao cadastrar';
                })
            } else {
                console.log('formulário inválido');
            }
        } else {
            
            recursoFoto.save($scope.foto, function() {
                $scope.foto = {};
                $scope.mensagem = 'Foto atualizada com sucesso';
                $scope.formulario.$setPristine()
            }, function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possivel atualizar a foto';
            });
        }
    }; 
});	