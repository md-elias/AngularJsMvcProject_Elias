var myapp;
(function () {

    myapp = angular.module('my-trainees', []);
    myapp.controller('HomeController', function ($scope) {  
        $scope.Message = "Yahoooo! we have successfully done our first part.";
    });

})();