(function(){
    var app = angular.module('hitek', [
    'ngRoute',
    'hitek.controllers',
    'hitek.services',
    'hitek.directives'
    ]);
    
    app.config(['$routeProvider', function($routeProvider){
        
        $routeProvider
        .when('/', {
            templateUrl: '/vistas/home.html'
        })
        .when('/about', {
              templateUrl: '/vistas/about.html'
              })
        .when('/contact', {
              templateUrl: '/vistas/contact.html'
              })
        .when('/panama', {
              templateUrl: '/vistas/panama.html'
              })
        .when('/products', {
              templateUrl: '/vistas/products.html',
              controller: 'productosController'
              })
        .when('/products/:tipo', {
            templateUrl: '/vistas/products.html',
            controller: 'productosController'
        })
        .when('/producto/:id', {
            templateUrl: '/vistas/producto.html',
            controller: 'productoController'
        })
        .when('/sales', {
              templateUrl: '/vistas/sales.html'
              })
        .when('/services', {
              templateUrl: '/vistas/services.html'
              })
        .otherwise({
            redirectTo: '/'
        })
    }]);
})();