(function(){
    var app = angular.module('hitek', [
    'ngRoute',
    'hitek.controllers',
    'hitek.services'
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
              templateUrl: '/vistas/products.html'
              })
        .when('/products/:id', {
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