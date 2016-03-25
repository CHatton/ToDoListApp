angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {})

.controller('AllCtrl', function($scope,AllTasks) {
  $scope.data = AllTasks;
})

.controller('WorkCtrl', function($scope,AllTasks,CurrentTask) {
  $scope.data = AllTasks;
  $scope.currentTask = CurrentTask;
  $scope.addButton = false; // to show the add button div
  $scope.toggleAdd = function(){ // toggle the showing
    $scope.addButton = !$scope.addButton;
  }
})

.controller('FinishedCtrl', function($scope,AllTasks) {
  $scope.data = AllTasks;
})

.controller('SettingsCtrl', function($scope,AllTasks,CurrentTask) {
  $scope.data = AllTasks;
  $scope.currentTask = CurrentTask;

  $scope.areYouSure = false;
  $scope.showReset = false;

  $scope.toggleAreYouSure = function(){
    $scope.areYouSure = !$scope.areYouSure;
  }

  $scope.reset = function(){
    // http://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
    while($scope.data.allTasks.length > 0){
      $scope.data.allTasks.pop();
    } // remove every element

    while($scope.data.finishedTasks.length > 0){
      $scope.data.finishedTasks.pop();
    } // remove every element

    $scope.currentTask.dueDate = null;
    $scope.currentTask.taskName = null;
    $scope.currentTask.fullTask = null;
    // also reset all the current values
    // don't need to do anything with assigned date
    // as it gets set on addition to the list
    $scope.data.save(); // save the now reset state of the app
  
    $scope.areYouSure = false;
  }
})

.controller('PersonalCtrl', function($scope,AllTasks,CurrentTask) {
  $scope.data = AllTasks;
  $scope.currentTask = CurrentTask;

  $scope.addButton = false; // to show the add button div
  $scope.toggleAdd = function(){ // toggle the showing
    $scope.addButton = !$scope.addButton;
  }

});
