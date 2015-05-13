angular.module('hubbles-law', ['nvd3'])
.controller('hubbleCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.chartOptions = {
        chart: {
            type: 'scatterChart',
            height: 400,
            xAxis: {
                axisLabel: 'Distance (Mpc)'
            },
            yAxis: {
                axisLabel: 'Redshift (z)'
            },
            showLegend: false,
            tooltips: false
        },
        title: {
            enable: true,
            text: "Hubble's Law with Modern Data"
        }
    };

    $scope.hubbleData = [];

    d3.csv('data/redshift.csv', function(error, csv) {
        var csvvalues = csv.map(function(d){
            d.x = +d.lumDist;
            d.y = +d.z;
            return d;
        });
        $scope.hubbleData = [{
            key: "Redshifts",
            values: csvvalues
        }];
        $scope.$apply();
    });
}]);