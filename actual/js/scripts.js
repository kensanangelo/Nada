$(document).ready(function(){

	$("#about").click(function() {
	   $("#aboutWindow").toggleClass("actived");
	});

	$("#search").submit(function() {
	   $("#searchWindow").toggleClass("actived");
	});

});