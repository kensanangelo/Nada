$(document).ready(function(){

	$("#about").click(function() {
	   $("#aboutWindow").toggleClass("actived");
	});

<<<<<<< HEAD
	$("#search").submit(function(event) {
		event.preventDefault();
=======
	$("#search").submit(function() {
>>>>>>> origin/Interface
	   $("#searchWindow").toggleClass("actived");
	});

});