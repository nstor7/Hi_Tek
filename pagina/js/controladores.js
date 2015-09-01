(function(){
    angular.module('hitek.controllers', [])
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
    });
})();