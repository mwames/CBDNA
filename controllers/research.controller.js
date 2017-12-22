(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('ResearchController', ResearchController);

    ResearchController.$inject = ['$scope', 'BackgroundService'];

    function ResearchController($scope, BackgroundService) {
        var vm = this;

        BackgroundService.setCurrentBackground('default-background');
    }
})();