//GET https://api.yelp.com/v3/businesses/{id}/reviews
//Api Key - XfgA1w21ZL6IXamdmtzTE2Sm1i3go1ExSDGMtyyZUJVJ7xwTwYXoUgOCVQY4HD_gBv3kg40QGVzEF8JKxWlueyJugaoOJiSPNU3rNWEpDM4YKWxYLyv86PpdBwgzWnYx
//Client Id - wK3_6acTW6X23S5U5YMaUw
(function () {
    'use strict';

    angular
        .module('cbdna')
        .factory('YelpService', YelpService);

    YelpService.$inject = ['$http'];

    function YelpService($http) {

        var service = {
            getReviews: getReviews
        };
        return service;

        function getReviews(businessId) {
            var request = {
                method: "GET",
                url: "https://api.yelp.com/v3/businesses/" + businessId + "/reviews",
                headers: {
                    "Authorization":"Bearer XfgA1w21ZL6IXamdmtzTE2Sm1i3go1ExSDGMtyyZUJVJ7xwTwYXoUgOCVQY4HD_gBv3kg40QGVzEF8JKxWlueyJugaoOJiSPNU3rNWEpDM4YKWxYLyv86PpdBwgzWnYx"
                }
            }
            return $http(request);
        }
    };
})();