$(document).ready(function(){

	$("#about").click(function() {
		$("#aboutWindow").toggleClass("actived");
	});

	$("#search").submit(function(event) {
		event.preventDefault();

		var i;
		var search=$('#searchBox').val();
		var name, fish, county;
		var results=[];



		for (i = 0; i < rivers.length; i++) {
			name=rivers[i].name.toLowerCase();
			fish=rivers[i].fish_spec.toLowerCase();
			county=rivers[i].county.toLowerCase();


			if(name.indexOf(search) > -1
				|| fish.indexOf(search) > -1
				|| county.indexOf(search) > -1)
				console.log(name);
				
	
		};


		$("#searchWindow").toggleClass("actived");

	});

});