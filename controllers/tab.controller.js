(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('TabController', TabController);

    TabController.$inject = ['$scope'];

    function TabController($scope) {
        var vm = this;

        //member variables
        vm.tab = 1;

        //exposed functions
        vm.setTab = setTab;
        vm.isSet = isSet;

        function setTab(newTab) {
            vm.tab = newTab
        }

        function isSet(tab) {
            return vm.tab === tab;
        }
    }
})();