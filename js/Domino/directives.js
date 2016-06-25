/**
 * Created by Aleksandr on 25.06.2016.
 */
angular.module('Domino')
    .directive('faceOne', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/domino/faceOne.html',
            link: function (scope, element, attrs) {
                element.bind('click', function (e) {
                    var dominoTop = angular.element('.dominoTop');
                    var dominoBottom = angular.element('.dominoBottom');

                    console.log(dominoTop.children()[0]);

                    if (dominoTop.children()[0] == undefined) {
                        dominoTop.append(element.clone());
                    }
                    else if ((dominoBottom.children()[0] == undefined) && (dominoTop.children()[0] != undefined)) {
                        dominoBottom.append(element.clone());
                    }
                    else if (dominoTop.children()[0] != undefined && dominoBottom.children()[0] != undefined) {
                        alert('::: S ::: T ::: O ::: P :::');
                    }
                });
            }
        }
    });
angular.module('Domino')
    .directive('faceTwo', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/domino/faceTwo.html',
            link: function (scope, element, attrs) {
                element.bind('click', function (e) {
                    var dominoTop = angular.element('.dominoTop');
                    var dominoBottom = angular.element('.dominoBottom');

                    console.log(dominoTop.children()[0]);

                    if (dominoTop.children()[0] == undefined) {
                        dominoTop.append(element.clone());
                    }
                    else if ((dominoBottom.children()[0] == undefined) && (dominoTop.children()[0] != undefined)) {
                        dominoBottom.append(element.clone());
                    }
                    else if (dominoTop.children()[0] != undefined && dominoBottom.children()[0] != undefined) {
                        alert('::: S ::: T ::: O ::: P :::');
                    }
                });
            }
        }
    });
angular.module('Domino')
    .directive('faceThree', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/domino/faceThree.html',
            link: function (scope, element, attrs) {
                element.bind('click', function (e) {
                    var dominoTop = angular.element('.dominoTop');
                    var dominoBottom = angular.element('.dominoBottom');

                    console.log(dominoTop.children()[0]);

                    if (dominoTop.children()[0] == undefined) {
                        dominoTop.append(element.clone());
                    }
                    else if ((dominoBottom.children()[0] == undefined) && (dominoTop.children()[0] != undefined)) {
                        dominoBottom.append(element.clone());
                    }
                    else if (dominoTop.children()[0] != undefined && dominoBottom.children()[0] != undefined) {
                        alert('::: S ::: T ::: O ::: P :::');
                    }
                });
            }
        }
    });
angular.module('Domino')
    .directive('faceFour', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/domino/faceFour.html',
            link: function (scope, element, attrs) {
                element.bind('click', function (e) {
                    var dominoTop = angular.element('.dominoTop');
                    var dominoBottom = angular.element('.dominoBottom');

                    console.log(dominoTop.children()[0]);

                    if (dominoTop.children()[0] == undefined) {
                        dominoTop.append(element.clone());
                    }
                    else if ((dominoBottom.children()[0] == undefined) && (dominoTop.children()[0] != undefined)) {
                        dominoBottom.append(element.clone());
                    }
                    else if (dominoTop.children()[0] != undefined && dominoBottom.children()[0] != undefined) {
                        alert('::: S ::: T ::: O ::: P :::');
                    }
                });
            }
        }
    });
angular.module('Domino')
    .directive('faceFive', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/domino/faceFive.html',
            link: function (scope, element, attrs) {
                element.bind('click', function (e) {
                    var dominoTop = angular.element('.dominoTop');
                    var dominoBottom = angular.element('.dominoBottom');

                    console.log(dominoTop.children()[0]);

                    if (dominoTop.children()[0] == undefined) {
                        dominoTop.append(element.clone());
                    }
                    else if ((dominoBottom.children()[0] == undefined) && (dominoTop.children()[0] != undefined)) {
                        dominoBottom.append(element.clone());
                    }
                    else if (dominoTop.children()[0] != undefined && dominoBottom.children()[0] != undefined) {
                        alert('::: S ::: T ::: O ::: P :::');
                    }
                });
            }
        }
    });
angular.module('Domino')
    .directive('faceSix', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/domino/faceSix.html',
            link: function (scope, element, attrs) {
                element.bind('click', function (e) {
                    var dominoTop = angular.element('.dominoTop');
                    var dominoBottom = angular.element('.dominoBottom');

                    console.log(dominoTop.children()[0]);

                    if (dominoTop.children()[0] == undefined) {
                        dominoTop.append(element.clone());
                    }
                    else if ((dominoBottom.children()[0] == undefined) && (dominoTop.children()[0] != undefined)) {
                        dominoBottom.append(element.clone());
                    }
                    else if (dominoTop.children()[0] != undefined && dominoBottom.children()[0] != undefined) {
                        alert('::: S ::: T ::: O ::: P :::');
                    }
                });
            }
            
        }
    });
