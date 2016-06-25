/**
 * Created by Aleksandr on 23.06.2016.
 */
'use strict';

angular.module('Domino')
    .controller('DominoController', ['$scope', '$log', function ($scope, $log) {

        $scope.slidersObj = {
            rotationSpeed: -1,
            figureSize: 1
        };

        $scope.slider = {
            options: {
                start: function (event, ui) {
                    $log.info('Slider start');
                    $log.debug($scope.slidersObj.figureSize);
                    $log.debug($scope.slidersObj.rotationSpeed);
                },
                stop: function (event, ui) {
                    $log.info('Slider stop');
                    $log.debug($scope.slidersObj.figureSize);
                    $log.debug($scope.slidersObj.rotationSpeed);
                }
            }
        };

        $scope.number = 0;
      
        $scope.rotateClockwise = function () {
            $scope.number += 90;
            //if ($scope.number == 360) $scope.number = 0;
            console.log($scope.number);
        };
        $scope.rotateCounterClockwise = function () {
            $scope.number -= 90;
            //if ($scope.number == -360) $scope.number = 0;
        };

        
        $scope.transformRotate = "rotate(0deg)";
        $scope.transformScale = "scale(1,1)";
        
        $scope.$watch("number", function(val) {
            $scope.transformRotate = "rotate("+val+"deg)";
        });        
    }]);