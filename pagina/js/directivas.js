(function(){
    angular.module('hitek.directives', [])
    .directive('productoTipo', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/producto-tipo.html'
        };
    })
    .directive('productoImagen', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/producto-imagen.html'
        };
    })
    .directive('productoIdentificacion', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/producto-identificacion.html'
        };
    })
    .directive('productoDescripcion', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/producto-descripcion.html'
        };
    })
    .directive('productoPestanas', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/producto-pestanas.html'
        };
    })
    .directive('productoArticulos', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/producto-articulos.html'
        };
    })
    .directive('productoTabsystem', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/producto-tabsystem.html',
            controller: 'tabsController'
        };
    })
    .directive('productosMenu', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/productos-menu.html',
            controller: 'tabsController'
        };
    })
    .directive('navegador', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/navegador.html',
            controller: 'menuController'
        };
    })
})();