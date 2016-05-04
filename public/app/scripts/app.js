angular.module('IonicFullstackSeed', ['ionic', 'ngCordova', 'ngResource', 'ngSanitize'])

    .run(function($ionicPlatform) {

        $ionicPlatform.ready(function() {
            // save to use plugins here
        });

        // add possible global event handlers here

    })

    .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
        // register $http interceptors, if any. e.g.
        // $httpProvider.interceptors.push('interceptor-name');

        // Application routing
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/main.html',
                controller: 'MainController as vm'
            })
            .state('app.users', {
                url: '/users',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/users.html',
                        controller: 'usersController as vm'
                    }
                },
                resolve: {
                  users: function(usersFactory) {
                      return usersFactory.getUsers();
                  }
                }
            });


        // redirects to default route for undefined routes
        $urlRouterProvider.otherwise('/app/users');
    });
