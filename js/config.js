/**
 * Created by Aleksandr on 23.06.2016.
 */
angular.module('app')
    .config(function ($routeProvider) {

        $routeProvider.when('/start', {
            templateUrl: 'partials/start.html'
        });

        $routeProvider.when('/domino', {
            templateUrl: 'partials/domino.html',
            controller: 'DominoController'
        });

        $routeProvider.when('/gpacalc', {
            templateUrl: 'partials/gpacalc.html',
            controller: 'CalcController'
        });

        $routeProvider.otherwise({ redirectTo: '/start' });
});