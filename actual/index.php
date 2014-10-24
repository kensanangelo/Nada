<?php
	include 'includes/connectNY.php';

?><!DOCTYPE html>
<html>
<head>
<script
src="http://maps.googleapis.com/maps/api/js?key=AIzaSyArNFTlstSX6IZDDmgTJI5YZ7mAnST6glc&sensor=false">
</script>
<script>
	function initialize()
	{
		var mapProp = {
		  center:new google.maps.LatLng(42.7559421,-75.8092041),
		  zoom:7,
		  mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

		var infowindow = new google.maps.InfoWindow();

		var marker,i;

		var locations=<?php echo json_encode($response); ?>;

		for(i=0;i<locations.length;i++){

				console.log(locations[i].point_x);

		    marker = new google.maps.Marker({
		    	position: new google.maps.LatLng(locations[i].point_y, locations[i].point_x),
		        map: map
		    });
 			
 			marker.setMap(map);

		    google.maps.event.addListener(marker, 'click', (function(marker, i) {
		        return function() {
		          infowindow.setContent(locations[i].name);
		          infowindow.open(map, marker);
		        }
		    })(marker,i));

		}
	}

	google.maps.event.addDomListener(window, 'load', initialize);
</script>

<style type="text/css">
	html {height:100%}
	body {height:100%;margin:0;padding:0}
	#header {
		height: 5%;
	}
	#googleMap {
		height:95%;
		width: 80%;
		margin: 0 auto;
	}
</style>

</head>

<body>
<div id="header"></div>
<div id="googleMap"></div>

</body>
</html>