/**
 * Created by Aleksandr on 23.06.2016.
 */
'use strict';

angular.module('GPAcalc')
    .controller('CalcController', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
        var collectionUrl = "https://api.mongolab.com/api/1/databases/gpacalculator/collections/grades";
        var apiKey = 'dxutsfn8IwNW0usGzQ6nSiOaL4bLCpM1';
        $scope.activeTabIndex = 0;
        $scope.gradeName = null;
        $scope.AVEgrade = null;

        var getGrades = function () {
            $http.get(collectionUrl, {
                params: {
                    apiKey: apiKey
                }
            }).success(function (data, status, headers, config) {
                $scope.grades = data;
            }).error(function (data, status, headers, config) {
                console.log('Error in fetching data');
            });
        };
        getGrades();

        var generateUqinueID = function () {
            return '_' + Math.random().toString(36).substr(2, 9);
        };
        var newGradeObject = {
            //_id: generateUqinueID(),
            title: "newGrade",
            students: [

            ]
        };

        $scope.addGrade = function () {
            newGradeObject._id = generateUqinueID();
            $http.post(collectionUrl, newGradeObject, {
                params: {
                    apiKey: apiKey
                }
            }).success(function (data) {
                console.log(data);
                getGrades();
                //$scope.grades.push(newGradeObject);
            });

        };

        $scope.deleteGrade = function (grade, index) {
            console.log(index);
            $scope.grades.splice(index, 1);
            $http.delete(collectionUrl + '/' + grade._id, {
                params: {
                    apiKey: apiKey
                }
            })
        };
        
        $scope.updateGradeName = function (grade, index) {
            $http.put(collectionUrl + '/' + grade._id, grade, {
                    params: {
                        apiKey: apiKey
                    }
                });
            console.log(grade);
            
            $scope.gradeName = grade.title;
            
        };
        
        /*$scope.newStName = null;
        $scope.newStGPA = null;*/

        function initNewSt() {
            $scope.newStudent = {
                stName: '',
                stGPA: ''
            };
        }
        initNewSt();


        $scope.addStudentToGrade = function (grade, formController) {
            $scope.studentAddedSuccess = false;
                if (formController.stGPA.$valid) {
                    
                    var studentToSave = $scope.newStudent;
                    initNewSt();
                    var gradeToSave = angular.copy(grade);
                    grade.students.push(studentToSave);
                    gradeToSave.students.push(studentToSave);
                    $scope.studentAddedSuccess = true;
                    $scope.bindGradeInfo(grade);
                    $http.put(collectionUrl + '/' + grade._id, gradeToSave, {
                        params: {
                            apiKey: apiKey
                        }
                    });

                }
            };
        $scope.studentDeletedSuccess = false;
        $scope.deleteStudentFromGrade = function (studentIndex, grade) {
            $scope.studentDeletedSuccess = true;
            console.log(studentIndex);
            var gradeToSave = angular.copy(grade);

            grade.students.splice(studentIndex, 1);
            gradeToSave.students.splice(studentIndex, 1);

            $scope.bindGradeInfo(grade);

            $http.put(collectionUrl + '/' + grade._id, gradeToSave, {
                params: {
                    apiKey: apiKey
                }
            });
            
        };

        $scope.bindGradeInfo = function (grade) {
            $scope.gradeName = grade.title;
            var sum = 0;
            for (var i = 0; i < grade.students.length; i++) {
                sum += +grade.students[i].stGPA;
            }

            $scope.AVEgrade = (sum != 0) ? (sum / grade.students.length) : 0;
            //console.log(sum);
        };
        
        
        $scope.hasError = function (modelController, error) {
            return (modelController.$dirty) && error;
        };

        
        

     

    }]);