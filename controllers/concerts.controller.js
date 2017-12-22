(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('ConcertsController', ConcertsController);

    ConcertsController.$inject = ['$scope', 'BackgroundService'];

    function ConcertsController($scope, BackgroundService) {
        var vm = this;

        BackgroundService.setCurrentBackground('default-background');
    }
})();