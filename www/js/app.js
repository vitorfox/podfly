  var app = angular.module('Podfly', []);

  app.controller('PodcastController', function(){
    this.podcast = podcast;
  });

  var podcast = {
    name: 'Azurite',
    description: 'Opa'
  };