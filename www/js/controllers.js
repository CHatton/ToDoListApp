angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('AllCtrl', function($scope,AllTasks) {
  $scope.data = AllTasks;
})

.controller('WorkCtrl', function($scope) {

})

.controller('FinishedCtrl', function($scope) {

})

.controller('SettingsCtrl', function($scope,AllTasks) {
  $scope.data = AllTasks;


})

.controller('PersonalCtrl', function($scope,$ionicActionSheet,AllTasks) {
  $scope.data = AllTasks;
  $scope.dateAdded;
  $scope.taskName;
  $scope.fullTask;
  $scope.dueDate;

  $scope.addButton = false; // to show the add button div
  $scope.toggleAdd = function(){ // toggle the showing
    $scope.addButton = !$scope.addButton;
  }
  
});
