(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('LodgingController', LodgingController);

    LodgingController.$inject = ['$scope', 'BackgroundService', 'TimerService'];

    function LodgingController($scope, BackgroundService, TimerService) {
        var vm = this;

        BackgroundService.setCurrentBackground('default-background');

        var bookingDate = new Date("Feb 20, 2018").getTime();

        vm.countdown = TimerService.getRemainingTime(bookingDate);
    }
})();