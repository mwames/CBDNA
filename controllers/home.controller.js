(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'BackgroundService', 'TimerService'];

    function HomeController($scope, BackgroundService, TimerService) {
        var vm = this;

        var targetDate = new Date("Feb 20, 2019").getTime();
        
        vm.countdown = TimerService.getRemainingTime(targetDate);

        BackgroundService.setCurrentBackground('home-background');
    }
})();