(function(){
    angular.module('hitek.services', [])
    .factory('hitekService', ['$http', '$q', function ($http, $q){
        function all(){
            
            var deferred = $q.defer();
            
            $http.get('/productos.json')
            .success(function(data){
                deferred.resolve(data);
            });
            
            return deferred.promise;
        };
        function byId(id){
            var deferred = $q.defer();
            all().then(function (data) {
                var results = data.filter(function (producto){
                    return producto.id === id;
                });
                deferred.resolve(results[0]);
            })
            return deferred.promise;
        };
        function byTipo(tipo){
            var deferred = $q.defer();
            all().then(function(data){
                var results = data.filter(function (producto){
                    return producto.tipo === tipo;
                });
                deferred.resolve(results);
            })
            return deferred.promise;
        };
            
        return {
            all: all,
            byId: byId,
            byTipo: byTipo
        };
    }])
})();