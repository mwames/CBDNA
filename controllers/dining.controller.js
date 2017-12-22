(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('DiningController', DiningController);

    DiningController.$inject = ['$scope', 'BackgroundService'];

    function DiningController($scope, BackgroundService) {
        var vm = this;

        BackgroundService.setCurrentBackground('default-background');
    }
})();