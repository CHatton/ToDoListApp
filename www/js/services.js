angular.module('starter.services', [])

.factory('AllTasks',function(){
	// factory in charge of providing tasks
	// to controllers
	var allTasks = []; // start off with no tasks
	var finishedTasks = [];

	function addTask(taskName,taskDescription,dueDate,category){
		var startDate = new Date();// added right now
		var newTask = {
			taskName:taskName,
			dueDate:dueDate,
			category:category,
			startDate:startDate,
		    properties:[taskDescription,"Due: " + dueDate.toDateString(),
		    "Started: " + startDate.toDateString()]}; 
		allTasks.push(newTask); // add it to all tasks too


		// sort them by date here
	}

	// http://codepen.io/shengoo/pen/bNbvdO/
  	// I got the collapsing list stuff from here

	var toggleTask = function(task) {
    	task.show = !task.show;
  	};

  	var isTaskShown = function(task) {
    	return task.show;
 	};

	// needed to find out how to sort by date property
	// http://stackoverflow.com/questions/10123953/sort-javascript-object-array-by-date
		
	function sortByDueDate(){
		allTasks.sort(function(a,b){
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
		finishedTasks.sort(function(a,b){
  			return b.properties[2] - a.properties[2];
		});
	}

	return {allTasks:allTasks,addTask:addTask,
		finishedTasks:finishedTasks, 
		sortByDueDate:sortByDueDate,sortByDateAdded:sortByDateAdded,
		toggleTask:toggleTask,isTaskShown:isTaskShown}
});