(function(){
   var QQmusicApp = angular.module('QQmusicApp',['ngRoute','QQmusicApp.homeModule','QQmusic.singerModule']);

      QQmusicApp.config(['$routeProvider',function($routeProvider){
                  $routeProvider.

                  otherwise({
                  	redirectTo:'/concert'
                  });
                                 
      }]);


})();