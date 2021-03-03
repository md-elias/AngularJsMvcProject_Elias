 
myapp.service('traineeService', function ($http) {



    this.getAllTrainees = function () {
        return $http.get('/Trainee/GetTrainee');
    }

    this.save = function (Trainee) {
        var request = $http({
            method: 'post',
            url: '/Trainee/Insert',
            data: Trainee
        });
        return request;
    }

 
    this.update = function (Trainee) {
        var updaterequest = $http({
            method: 'post',
            url: '/Trainee/Update',
            data: Trainee
        });
        return updaterequest;
    }


    this.delete = function (UpdateTraineeNo) {
        return $http.post('/Trainee/Delete/' + UpdateTraineeNo);
    }
});
