angular.module('starter.services', [])

.factory('AllTasks',function(CurrentTask){
	var currTask = CurrentTask;
	// factory in charge of providing tasks
	// to controllers
	var allTasks = JSON.parse(window.localStorage['tasks'] || '[]'); 
	//loads in from local storage or starts off with no tasks
	var finishedTasks = JSON.parse(window.localStorage['finished'] || '[]');

	function addTask(listToAddTo,taskName,taskDescription,dueDate,category){
		var startDate = new Date();// added right now
		var newTask = {
			taskName:taskName,
			dueDate:dueDate,
			category:category,
			finished:false, // starts off not finished
			show:false, // starts off hidden
			finishDate:null, // don't have a finish date to start with
			startDate:startDate,
		    properties:["Description: " + taskDescription,
			    "Started: " + startDate.toDateString(),
			    "Due Date: " + dueDate.toDateString()]}; 
			    // I have it as a list of properties, so that I can iterate through with an ng-repeat when the user clicks on the task
		listToAddTo.push(newTask); // add it to all tasks too
		
		currTask.dueDate = null;
  	  	currTask.taskName = null;
   		currTask.fullTask = null;
   		
   		// reset the current task to clear menu
		save();	// every time a task is added, save it to local storage, so that if the user closes the app at any time, all the tasks should be saved
		
	}

	var finishTask = function(index){
		// purpose is to remove for alltasks and add to finished
		 var itemToRemove = allTasks[index];
		 allTasks.splice(index, 1) // remove it from the list
		 toggleTask(itemToRemove); // so it doesn't appear opened up
		 itemToRemove.properties.push("Finished: " + new Date().toDateString());
		 // add the new finished property to be displayed in the finished tab
		 finishedTasks.push(itemToRemove); // add it
		 save(); // save changes
	}

	// http://codepen.io/shengoo/pen/bNbvdO/
  	// I got the collapsing list stuff from here
	var toggleTask = function(task) {
    	task.show = !task.show;
  	};

	// needed to find out how to sort by date property
	// http://stackoverflow.com/questions/10123953/sort-javascript-object-array-by-date
		
	function sortByDueDate(){
		allTasks.sort(function(a,b){
  			return b.dueDate - a.dueDate;
		});
		finishedTasks.sort(function(a,b){
  			return b.dueDate - a.dueDate;
		});
	}
	function sortByDateAdded(){
		allTasks.sort(function(a,b){
  			return b.startDate - a.startDate;
		});
		finishedTasks.sort(function(a,b){
  			return b.startDate - a.startDate;
		});
	}

	//http://stackoverflow.com/questions/18826320/what-is-the-hashkey-added-to-my-json-stringify-result
	// I learned I needed to use angular.toJson instead of JSON.stringify to remove the $$hashcode
	// which is created by the ng-repeat directive. It was causing some problems when trying to
	// load from local storage, saying there were repeats.

	function save(){
		window.localStorage['tasks'] = angular.toJson(allTasks);
		window.localStorage['finished'] = angular.toJson(finishedTasks);
	}

	return {allTasks:allTasks,addTask:addTask,
		finishedTasks:finishedTasks, 
		sortByDueDate:sortByDueDate,sortByDateAdded:sortByDateAdded,
		toggleTask:toggleTask, save:save,
		finishTask:finishTask,currTask:currTask}
})

.factory('CurrentTask',function(){
	// this is just the task that is being made to be added to the list
  var dateAdded;
  var taskName;
  var fullTask;
  var dueDate;

  return { dateAdded: dateAdded, 
  	taskName:taskName,
  	fullTask:fullTask,
  	dueDate:dueDate};
});