angular.module('starter.services', [])

.factory('AllTasks',function(){
	// factory in charge of providing tasks
	// to controllers
	var allTasks = []; // start off with no tasks
	var workTasks = [];
	var personalTasks = [];
	var finishedTasks = [];

	function addTask(listToAddTo,taskName,taskDescription,dueDate){
		var startDate = new Date();// added right now
		var newTask = {
			taskName:taskName,
			dueDate:dueDate,
			startDate:startDate,
		    properties:[taskDescription,"Due: " + dueDate.toDateString(),
		    "Started: " + startDate.toDateString()]}; 
		listToAddTo.push(newTask);
		// sort them by date here
	}

	// needed to find out how to sort by date property
	// http://stackoverflow.com/questions/10123953/sort-javascript-object-array-by-date
		
	function sortByDueDate(){
		allTasks.sort(function(a,b){
  			return b.properties[1] - a.properties[1];
		});
		workTasks.sort(function(a,b){
  			return b.properties[1] - a.properties[1];
		});
		personalTasks.sort(function(a,b){
			console.log(personalTasks);
  			return b.properties[1] - a.properties[1];
		});
		finishedTasks.sort(function(a,b){
  			return b.properties[1] - a.properties[1];
		});
	}
	function sortByDateAdded(){
		allTasks.sort(function(a,b){
  			return b.properties[2] - a.properties[2];
		});
		workTasks.sort(function(a,b){
  			return b.properties[2] - a.properties[2];
		});
		personalTasks.sort(function(a,b){
  			return b.properties[2] - a.properties[2];
		});
		finishedTasks.sort(function(a,b){
  			return b.properties[2] - a.properties[2];
		});
	}

	return {allTasks:allTasks,addTask:addTask,workTasks:workTasks,
		personalTasks:personalTasks,finishedTasks:finishedTasks, 
		sortByDueDate:sortByDueDate,sortByDateAdded:sortByDateAdded}
});