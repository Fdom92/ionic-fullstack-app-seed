(function() {
    'use strict';

    angular
        .module('IonicFullstackSeed')
        .controller('usersController', usersController);

    /* @ngInject */
    function usersController(users) {
        /*jshint validthis:true */
        var vm = this;
        vm.users = [];

        activate();

        function activate() {
          vm.users = users ? users : [{name: "User 1"},{name: "User 2"}];
        }
    }
})();
