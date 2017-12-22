(function () {
    'use strict';

    angular
        .module('cbdna')
        .factory('BackgroundService', BackgroundService);

    BackgroundService.$inject = [];

    function BackgroundService() {
        var callback = null;
        var service = {
            setCurrentBackground: setCurrentBackground,
            registerCallback: registerCallback
        };
        return service;

        function setCurrentBackground(background) {
            callback(background)
        }

        function registerCallback(newCallback) {
            callback = newCallback;
        }
    };
})();