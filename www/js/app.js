document.addEventListener('deviceready', function onDeviceReady() {
    angular.bootstrap(document, ['podfly']);
}, false);

var app = angular.module("podfly", []);

app.directive('podcastList', function(){
	return {
		restrict:'E',
		templateUrl: "fragments/podcast-list.html",
		controllerAs: "podcastList",
		controller: function() {

			this.podcasts = [];

			for (i=0; i < 5; i++) {

				var obj = {
					title: "Cocozinho" + i,
					lastUpdate: Date.now(),
					icon: 'img/square128.png'
				};

				this.podcasts.push(obj);
			};
		}
	};
});