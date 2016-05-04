(function() {
    'use strict';

    angular
        .module('IonicFullstackSeed')
        .factory('_', lodash);

    /* @ngInject */
    function lodash($window) {
      return $window._;
    }
})();
