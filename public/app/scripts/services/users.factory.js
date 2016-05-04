(function() {
    'use strict';

    angular
        .module('IonicFullstackSeed')
        .factory('usersFactory', usersFactory);

    /* @ngInject */
    function usersFactory($http, API_ENDPOINT, $q) {
        var service = {
            getUsers: getUsers
        };

        return service;

        function getUsers() {
            var defer = $q.defer();

            $http.get(API_ENDPOINT.host + ':' + API_ENDPOINT.port + '/my-api/users').success(function (data) {
                defer.resolve(data);
            }).error(function (data, status) {
                defer.reject(data);
            });

            return defer.promise;
        }
    }
})();
