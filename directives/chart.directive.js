(function () {
    'use strict';

    angular
        .module('cbdna')
        .directive('weatherChart', weatherChart);

    function weatherChart() {
        var directive = {
            link: link,
            scope: {},
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var ctx = element;
            
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',
            
                // The data for our dataset
                data: {
                    labels: ["Feb 20", "Feb 21", "Feb 22", "Feb 23"],
                    datasets: [{
                        label: "Average High",
                        fill: false,
                        borderColor: 'rgb(255, 99, 132)',
                        data: [73.3, 73.5, 73.6, 73.8],
                    }//,
                    // {
                    //     label: "Average Low",
                    //     fill: false,
                    //     borderColor: 'rgb(66, 134, 244)',
                    //     data: [42.3, 42.5, 42.6, 42.7],
                    // }
                ]
                },
            
                // Configuration options go here
                options: {}
            });
        }
    }
})();