(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$scope', 'BackgroundService'];

    function RegistrationController($scope, BackgroundService) {
        var vm = this;

        BackgroundService.setCurrentBackground('default-background');
    }
})();