function searchItems(){

	var i, tempIndex;
	var search=$('#searchBox').val().toLowerCase();
	var name, fish, county;
	var resultsRivers=[];
	var resultsLakes=[];
	var resultsHTML="";

	for (i = 0; i < rivers.length; i++) {
		name=rivers[i].name;
		name=name.toLowerCase();
		fish=rivers[i].fish_spec.toLowerCase();
		county=rivers[i].county.toLowerCase();


		if(name.indexOf(search) > -1 || fish.indexOf(search) > -1 || county.indexOf(search) > -1)
				resultsRivers.push(i);
	};

	for (i = 0; i < lakes.length; i++) {
		name=lakes[i].water
		name=name.toLowerCase();
		fish=lakes[i].fish_speci.toLowerCase();
		county=lakes[i].county.toLowerCase();


		if(name.indexOf(search) > -1 || fish.indexOf(search) > -1 || county.indexOf(search) > -1)
				resultsLakes.push(i);
	};

	if(resultsRivers.length>0 || resultsLakes.length>0){
		resultsHTML="<ul>";

		console.log(resultsRivers.length);

		for (i = 0; i < resultsRivers.length; i++) {
			tempIndex=resultsRivers[i];
			resultsHTML+="<li>"+rivers[tempIndex].name+"</li>";
		}

		for (i = 0; i < resultsLakes.length; i++) {
			tempIndex=resultsLakes[i];
			resultsHTML+="<li>"+lakes[tempIndex].water+"</li>";
		}

		resultsHTML+="</ul>";

	}else
		resultsHTML+="<p>No results found.</p>";


	$("#resultsWindow").html(resultsHTML);

}


//Loads google maps
function initialize()
{
	var mapProp = {
	  center:new google.maps.LatLng(42.7559421,-75.8092041),
	  minZoom:7,
	  zoom:7,
	  mapTypeId:google.maps.MapTypeId.ROADMAP,
	  styles: [{"featureType":"water","stylers":[{"color":"#7accf0"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":3}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}]
		};

	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var infowindow = new google.maps.InfoWindow();

	var marker,i;

	var pinIconR = new google.maps.MarkerImage(
		"img/r.png",
		null, /* size is determined at runtime */
		null, /* origin is 0,0 */
		null, /* anchor is bottom center of the scaled image */
		new google.maps.Size(40, 40)
	); 

	var pinIconL = new google.maps.MarkerImage(
		"img/l.png",
		null, /* size is determined at runtime */
		null, /* origin is 0,0 */
		null, /* anchor is bottom center of the scaled image */
		new google.maps.Size(40, 40)
	); 

	for(i=0;i<rivers.length;i++){

		marker = new google.maps.Marker({
			position: new google.maps.LatLng(rivers[i].point_y, rivers[i].point_x),
			map: map,
			icon:pinIconR
		});
		
		marker.setMap(map);

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
			  infowindow.setContent("<p>"+rivers[i].name+"</p>");
			  infowindow.open(map, marker);
			}
		})(marker,i));

	}

	for(i=0;i<lakes.length;i++){

		marker = new google.maps.Marker({
			position: new google.maps.LatLng(lakes[i].point_y, lakes[i].point_x),
			map: map,
			icon:pinIconL
		});
		
		marker.setMap(map);

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
			  infowindow.setContent("<p>"+lakes[i].water+"</p>");
			  infowindow.open(map, marker);
			}
		})(marker,i));

	}

}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){

	//Opens about window on click of title
	$("#about").click(function() {
		$("#aboutWindow").toggleClass("actived");
	});

	//Runs search on click
	$("#search").submit(function(event) {
		event.preventDefault();

		searchItems();

		$("#searchWindow").toggleClass("actived");

		return false;

	});

});