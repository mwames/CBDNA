(function () {
    'use strict';

    angular
        .module('cbdna')
        .factory('WeatherService', WeatherService);

    WeatherService.$inject = ['$http'];

    function WeatherService($http) {

        var service = {
            getCurrentWeather: getCurrentWeather
        };
        return service;

        function getCurrentWeather(city) {
            return $http.get('http://api.apixu.com/v1/current.json?key=ce18548e4d2542b8b46214047171112&q=' + String(city));
        }
    };
})();