(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('BackgroundController', BackgroundController);

    BackgroundController.$inject = ['$scope', '$location', 'BackgroundService'];

    function BackgroundController($scope, $location, BackgroundService) {
        var vm = this;

        vm.background = null;

        var callback = function(newBackground) {
            vm.background = newBackground;
        }

        BackgroundService.registerCallback(callback);
    }
})();