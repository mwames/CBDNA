(function () {
    'use strict';

    angular
        .module('cbdna')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$scope', '$location', 'WeatherService', '$filter'];

    function NavigationController($scope, $location, WeatherService, $filter) {
        var vm = this;

        vm.state = null;
        vm.weather = {};

        //exposed functions
        vm.setState = setState;
        vm.isCurrent = isCurrent;

        activate()
        function activate() {
            WeatherService.getCurrentWeather(85282).then(function(response){
                vm.weather = response.data;
                var localtime = String(vm.weather.location.localtime).replace(" ", "T");
                vm.weather.location.localtime = $filter('date')(localtime, "MMM d h:mm a");
            });

            var url = $location.url().substring(1);
            switch(url) {
                case "": 
                    vm.state = "home";
                    break;
                case "lodging": 
                    vm.state = url;
                    break;
                case "registration": 
                    vm.state = url;
                    break;
                case "sessions": 
                    vm.state = url;
                    break;
                case "concerts": 
                    vm.state = url;
                    break;
                case "venues": 
                    vm.state = url;
                    break;
                case "icb": 
                    vm.state = url;
                    break;
                case "dining": 
                    vm.state = url;
                    break;
            }
        }

        function setState(newState) {
            vm.state = newState;
        }

        function isCurrent(state) {
            return vm.state === state;
        }
    }
})();