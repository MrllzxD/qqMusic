(function(){
  var homeModule=angular.module('QQmusicApp.homeModule',[]);
      homeModule.config(['$routeProvider',function($routeProvider){
               $routeProvider.
               when('/home',{
                 templateUrl: 'home/home.html',
                  controller:"homeController"
               });

      }]);


    homeModule.controller("homeController",["$scope",function($scope){
        var index=0;
        $scope.left=function(){
                         console.log(111);
                         KGGMove($('.banner_ul')[0],"left",index%3*-300*4);
                         index++
                 };
        $scope.right=function(){
            console.log(111);
            KGGMove($('.banner_ul')[0],"left",index%3*-300*4);
            index++
        }
    }])


})();