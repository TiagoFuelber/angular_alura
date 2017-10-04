angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){

	return $resource('/v1/fotos/:fotoId', null, {
		'update': {
			method: 'PUT'
		}
	});
})
.factory('cadastroDeFoto', function(recursoFoto, $q){

	var service = {};

	service.cadastrar = function(foto) {

		return $q(function(resolve, reject){

			if(foto._id) {
				recursoFoto.update({fotoId: foto._id}, foto, function() {
					resolve({

					});
				}, function(erro) {
					consoel.log(erro);
					reject({
						mensagem: 'Não foi possível utilizar '
					});
				});
			} else {
				recursoFoto.save();
			}

		})

	}

});