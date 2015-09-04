(function(){
    angular.module('hitek.controllers', [])
    .controller('productosController', ['$scope', '$routeParams', 'hitekService', function($scope, $routeParams, hitekService){
        var tipo = $routeParams.tipo;
        $scope.producto = {};
        
        if(tipo){
        hitekService.byTipo(tipo).then(function(data){
            $scope.productos = data;
        });
        }else{
            hitekService.all().then(function(data){
                $scope.productos = data;
            });
        }
    }])
    .controller('productoController', ['$scope', '$routeParams', 'hitekService', function($scope, $routeParams, hitekService){
      
        var id = $routeParams.id;
        $scope.producto = {};
        
        hitekService.byId(id).then(function (data){
            $scope.producto = data;
        });
    }])
    .controller('tabsController', function($scope){
        this.tab = 0;
        this.selectTab = function(tab){
            this.tab = tab;
        };
    })
    .controller('menuController', ['$scope', function($scope){
         $scope.show = false;

          $scope.toggle = function () {
            $scope.show = !$scope.show;
        };
    }]);
})();