angular.module('starter.services', [])

.factory('AllTasks',function(){
	// factory in charge of providing tasks
	// to controllers
	var allTasks = JSON.parse(window.localStorage['tasks'] || []); 
	//loads in from local storage or starts off with no tasks
	var finishedTasks = JSON.parse(window.localStorage['finished'] || []);

	function addTask(listToAddTo,taskName,taskDescription,dueDate,category){
		var startDate = new Date();// added right now
		var newTask = {
			taskName:taskName,
			dueDate:dueDate,
			category:category,
			startDate:startDate,
		    properties:[taskDescription,
		    "Due: " + dueDate.toDateString(),
		    "Started: " + startDate.toDateString()]}; 
		listToAddTo.push(newTask); // add it to all tasks too
		save();
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

	function save(){
		window.localStorage['tasks'] = JSON.stringify(allTasks);
		window.localStorage['finished'] = JSON.stringify(finishedTasks);
	}


	return {allTasks:allTasks,addTask:addTask,
		finishedTasks:finishedTasks, 
		sortByDueDate:sortByDueDate,sortByDateAdded:sortByDateAdded,
		toggleTask:toggleTask,isTaskShown:isTaskShown, save:save}
})

.factory('CurrentTask',function(){

  var dateAdded;
  var taskName;
  var fullTask;
  var dueDate;

  return { dateAdded: dateAdded, 
  	taskName:taskName,
  	fullTask:fullTask,
  	dueDate:dueDate};
});