$(document).ready(function(){

	$("#about").click(function() {
	   $("#aboutWindow").toggleClass("actived");
	});

	$("#search").submit(function(event) {
		event.preventDefault();
	   $("#searchWindow").toggleClass("actived");
	});

});