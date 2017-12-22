(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('TravelController', TravelController);

    TravelController.$inject = ['$scope', 'BackgroundService'];

    function TravelController($scope, BackgroundService) {
        var vm = this;

        BackgroundService.setCurrentBackground('default-background');
    }
})();