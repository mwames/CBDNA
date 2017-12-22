(function () {
    'use strict';

    angular
        .module('cbdna')
        .factory('TimerService', TimerService);

    TimerService.$inject = [];

    function TimerService() {
        var service = {
            getRemainingTime: getRemainingTime
        };
        return service;

        function getRemainingTime(targetTime) {
            var now = new Date().getTime();

            var distance = targetTime - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            return {days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds};
        }
    };
})();