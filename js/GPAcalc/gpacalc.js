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
        
        var newGradeObject = {
            //_id: "newGrade" + ++gradeId,
            title: "newGrade",
            students: [

            ]
        };

        $scope.addGrade = function () {
            /*$timeout(function(){
                $scope.activeTabIndex = 0;
            });*/
            var isAdd = true;
            //for (var i = 0; i < $scope.grades.length; ++i) {
                //if ($scope.grades[i]._id == 'newGrade') {
                //    isAdd = false;
                //    alert("ERROR! \nnewGrade is already exist! \nPlease, edit newGrade tab to add new one!");
                //}
                //else isAdd = true;
            //}
            if (isAdd) {
                $scope.grades.push(newGradeObject);
                $http.post(collectionUrl, newGradeObject, {
                    params: {
                        apiKey: apiKey
                    }
                }).then(function (response) { return null });
            }
            //getGrades();
        };

        $scope.deleteGrade = function (grade, index) {
            console.log(index);
            $scope.grades.splice(index, 1);
            $http.delete(collectionUrl + '/' + grade._id.$oid, {
                params: {
                    apiKey: apiKey
                }
            })
        };
        
        $scope.updateGradeName = function (grade, index) {
            $http.put(collectionUrl + '/' + grade._id.$oid, grade, {
                    params: {
                        apiKey: apiKey
                    }
                });
            console.log(grade);
            
            $scope.gradeName = grade.title;
            
        };
        
        $scope.newStName = null;
        $scope.newStGPA = null;

        function initNewSt() {
            $scope.newStudent = {
                stName: '',
                stGPA: ''
            };
        }
        initNewSt();
        
        $scope.addStudentToGrade = function (grade) {
            if ($scope.newStudent.stName != "" && $scope.newStudent.stGPA != "") {
                var studentToSave = $scope.newStudent;
                initNewSt();
                var gradeToSave = angular.copy(grade);
                grade.students.push(studentToSave);
                gradeToSave.students.push(studentToSave);

                $http.put(collectionUrl + '/' + grade._id.$oid, gradeToSave, {
                    params: {
                        apiKey: apiKey
                    }
                });
            }
            else {
                alert("Enter values!");
            }
        };

        $scope.deleteStudentFromGrade = function (studentIndex, grade) {
            console.log(studentIndex);
            var gradeToSave = angular.copy(grade);

            grade.students.splice(studentIndex, 1);
            gradeToSave.students.splice(studentIndex, 1);

            $http.put(collectionUrl + '/' + grade._id.$oid, gradeToSave, {
                params: {
                    apiKey: apiKey
                }
            })
        };


        
        
        $scope.hasError = function (modelController, error) {
            return (modelController.$dirty) && error;
        };

        
        

     

    }]);