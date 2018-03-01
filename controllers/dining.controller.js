(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('DiningController', DiningController);

    DiningController.$inject = ['$scope', 'BackgroundService', 'RestaurantService'];

    function DiningController($scope, BackgroundService, RestaurantService) {
        var vm = this;
        vm.locations = [];

        BackgroundService.setCurrentBackground('default-background');

        activate();
        function activate() {
            RestaurantService.getAll().then(function(response) {
                vm.locations = response.data;
            });
        }
    }
})();