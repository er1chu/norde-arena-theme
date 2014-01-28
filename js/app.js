var app = angular.module('arenaApp', ['ngResource', 'ngSanitize']);

app.controller('channelShow', function($scope, $resource) { 
  var Channel = $resource('http://api.are.na/v2/channels/:slug');

  var channel = Channel.get({slug: 'arena-influences', sort: 'position', direction: 'asc'}, function(){
    $scope.channel = channel;
  });
})