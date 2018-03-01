(function () {
    'use strict';

    angular
        .module('cbdna')
        .factory('RestaurantService', RestaurantService);

    RestaurantService.$inject = ['$http'];

    function RestaurantService($http) {

        var service = {
            getAll: getAll
        };
        return service;

        function getAll() {
           return $http.get('https://sheets.googleapis.com/v4/spreadsheets/1ER728y8A4Y8PPa-pA55hVmf9amQ61pKa5oi0G6aui2Q/values/A1:B6?majorDimension=ROWS&key=AIzaSyANi9ekzazKEV5ZrWsMij2TxdGRznZ3mHc')
        }

    };
})();