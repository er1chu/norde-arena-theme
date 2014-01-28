 var arena = angular.module('arenaApp', ['ngResource', 'ngSanitize']);

            arena.controller('channelShow', function($scope, $resource) { 
              var Channel = $resource('http://api.are.na/v2/channels/:slug');

              var channel = Channel.get({slug: 'arena-influences', sort: 'position', direction: 'asc'}, function(){
                $scope.channel = channel;
              });
            })