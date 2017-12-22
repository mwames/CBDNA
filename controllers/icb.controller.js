(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('ICBController', ICBController);

    ICBController.$inject = ['$scope', 'BackgroundService'];

    function ICBController($scope, BackgroundService) {
        var vm = this;

        BackgroundService.setCurrentBackground('default-background');
    }
})();