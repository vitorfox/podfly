document.addEventListener('deviceready', function onDeviceReady() {
    angular.bootstrap(document, ['podfly']);
}, false);

var app = angular.module("podfly", []);

app.directive('podcastList', function(){
	return {
		restrict:'E',
		templateUrl: "fragments/podcast-list.html",
		controllerAs: "podcastList",
		controller: ['$http',function($http) {

			var $this = this;

			$this.podcasts = [];

			var account_token = 'fdae317a5ffdae317a5ffdae317a5ffdae317a5f'

			$http.get('https://podfly-api.appspot.com/podcast/me/' + account_token).success(function(data){
				data.forEach(function(e){
					$this.podcasts.push(e);
				});
			});

		}]
	};
});