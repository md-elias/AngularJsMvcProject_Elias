
myapp.controller('trainee-controller', function ($scope, traineeService) {


    loadTrainees();

    function loadTrainees() {
        var TraineeRecords = traineeService.getAllTrainees();
        TraineeRecords.then(function (d) {
            $scope.Trainees = d.data;
        },
            function () {
                alert("Error occured while fetching trainee list...");
            });
    }

 
    $scope.save = function () {
        var Trainee = {
            TraineeNo: $scope.TraineeNo,
            TraineeName: $scope.TraineeName,
            MSID: $scope.MSID,
            ExamCode: $scope.ExamCode,
            Score: $scope.Score
          
        };
        var saverecords = traineeService.save(Trainee);
        saverecords.then(function (d) {
            if (d.data.success === true) {
                loadTrainees();
                alert("Trainee added successfully");
                $scope.resetSave();
            }
            else { alert("Trainee not added."); }
        },
            function () {
                alert("Error occurred while adding trainee.");
            });
    }


    $scope.resetSave = function () {
        $scope.TraineeNo = '';
        $scope.TraineeName = '';
        $scope.MSID = '';
        $scope.ExamCode = '';
        $scope.Score = '';
      
    }

 
    $scope.getForUpdate = function (Trainee) {
        $scope.UpdateTraineeNo = Trainee.TraineeID;
        $scope.UpdateTraineeName = Trainee.TraineeName;
        $scope.UpdateMSID = Trainee.MSID;
        $scope.UpdateExamCode = Trainee.ExamCode;
        $scope.UpdateScore = Trainee.Score;
       
    }

    $scope.getForDelete = function (Trainee) {
        $scope.UpdateTraineeNo = Trainee.TraineeID;
        $scope.UpdateTraineeName = Trainee.TraineeName;
    }

    $scope.update = function () {
        var Trainee = {
            TraineeID: $scope.UpdateTraineeNo,
            TraineeName: $scope.UpdateTraineeName,
            MSID: $scope.UpdateMSID,
            ExamCode: $scope.UpdateExamCode,
            Score: $scope.UpdateScore
    
        };
        var updaterecords = traineeService.update(Trainee);
        updaterecords.then(function (d) {
            if (d.data.success === true) {
                loadTrainees();
                alert("Trainee updated successfully");
                $scope.resetUpdate();
            }
            else {
                alert("Trainee not updated.");
            }
        },
            function () {
                alert("Error occured while updating trainee record");
            });
    }


    $scope.resetUpdate = function () {
        $scope.UpdateTraineeNo = '';
        $scope.UpdateTraineeName = '';
        $scope.UpdateMSID = '';
        $scope.UpdateExamCode = '';
        $scope.UpdateScore = '';
     
    }

    
    $scope.delete = function (UpdateTraineeNo) {
        var deleterecord = traineeService.delete($scope.UpdateTraineeNo);
        deleterecord.then(function (d) {
            if (d.data.success === true) {
                loadTrainees();
                alert("Trainee deleted succussfully");
            }
            else {
                alert("Trainee not deleted.");
            }
        });
    }
    

   
});
