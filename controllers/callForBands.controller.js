(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('CallForBandsController', CallForBandsController);

    CallForBandsController.$inject = ['$scope', 'BackgroundService', 'TimerService'];

    function CallForBandsController($scope, BackgroundService, TimerService) {
        var vm = this;

        BackgroundService.setCurrentBackground('default-background');
    }
})();