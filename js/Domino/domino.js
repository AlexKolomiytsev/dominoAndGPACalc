/**
 * Created by Aleksandr on 23.06.2016.
 */
'use strict';

angular.module('Domino')
    .controller('DominoController', ['$scope', function ($scope) {
        $scope.leftRotation = function () {
            console.log('left rotation');
        };
        $scope.rightRotation = function () {
            console.log('right rotation');
        }
    }]);