var singerModule =angular.module('QQmusic.singerModule',[]);

singerModule.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/singer',{

		templateUrl:'singer/singer.html',
	})
}])