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

			var uuid = 'device.uuid'

			var search = "jovem";

			/*$http.get('http://10.0.3.2:9090/podcast/search/' + search).success(function(data){
				data.forEach(function(e){
					if (e.imageUrl == null)
						e.imageUrl = 'img/no-image.jpg';
					$this.podcasts.push(e);
				});
			});*/
			data = [];
			for (i =0; i<=5; i++) {
				data.push({
					"title": "Teste " + i,
					"lastBuildDate": (new Date()) - i
				});
			}

			data.forEach(function(e){
				if (e.imageUrl == null)
					e.imageUrl = 'img/no-image.jpg';
				$this.podcasts.push(e);
			});

		}]
	};
});