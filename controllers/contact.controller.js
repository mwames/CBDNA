(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope', 'BackgroundService'];

    function ContactController($scope, BackgroundService) {
        var vm = this;

        BackgroundService.setCurrentBackground('contact-background');
    }
})();