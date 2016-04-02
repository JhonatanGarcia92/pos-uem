angular.module('app.example')
.factory('CervejariaFactory', function($http){
  return {
    getCervejas: function(){
      return $http
              .get('http://munif.com.br/bereja/api/cervejaria')
              .then(function(response){
                return response.data
              })
    },
    save: function(obj){
      return $http
              .post('http://munif.com.br/bereja/api/cervejaria', obj)
    },
    deletar: function(id){
      return $http
              .delete('http://munif.com.br/bereja/api/cervejaria/'.concat(id))
    },
    update: function(cervejaria){
      return $http
              .put('http://munif.com.br/bereja/api/cervejaria/'.concat(cervejaria.id), cervejaria)
    }
  }
})
