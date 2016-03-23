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

.controller('PersonalCtrl', function($scope,AllTasks) {
  $scope.data = AllTasks;
  $scope.dateAdded;
  $scope.taskName;
  $scope.fullTask;
  $scope.dueDate;

  // http://codepen.io/shengoo/pen/bNbvdO/
  // I got the collapsing list stuff from here
  
  $scope.toggleTask = function(task) {
    task.show = !task.show;
  };
  $scope.isTaskShown = function(task) {
    return task.show;
  };
});
