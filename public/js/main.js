angular.module("alurapic", ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])   
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        
        $routeProvider
            .when('/fotos', {
                templateUrl: 'partials/principal.html',
                controller: 'FotosController'
            })
            .when('/foto/new', {
                templateUrl: 'partials/foto.html',
                controller: 'FotoController'
            })
            .when('/foto/edit/:fotoId', {
                templateUrl: 'partials/foto.html',
                controller: 'FotoController'
            })
            .otherwise({
                redirectTo: '/fotos'
            });
    });

