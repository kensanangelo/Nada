function addMarkers(rivIndexs, lakeIndexs){
	var i;
	var resultMarks = [];

	var pinIconR = new google.maps.MarkerImage(
		"img/riverMark.png",
		null, /* size is determined at runtime */
		null, /* origin is 0,0 */
		null, /* anchor is bottom center of the scaled image */
		new google.maps.Size(55, 27)
	); 

	var pinIconL = new google.maps.MarkerImage(
		"img/lakeMark.png",
		null, /* size is determined at runtime */
		null, /* origin is 0,0 */
		null, /* anchor is bottom center of the scaled image */
		new google.maps.Size(55, 27)
	); 

	google.maps.event.clearListeners(map, 'click');

	for(i=0;i<rivIndexs.length;i++){

		var index=rivIndexs[i];

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(rivers[index].point_y, rivers[index].point_x),
			map: map,
			icon:pinIconR,
			indexNum: index
		});

		google.maps.event.addListener(marker, 'click', function() {
			showInfo('river', this.indexNum);
		});
	
		resultMarks.push(marker);
	}

	for(i=0;i<lakeIndexs.length;i++){

		var index=lakeIndexs[i];

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lakes[index].point_y, lakes[index].point_x),
			map: map,
			icon:pinIconL,
			indexNum: index
		});

		google.maps.event.addListener(marker, 'click', function() {
			showInfo('lake', this.indexNum);
		});
	
		resultMarks.push(marker);
	}

	return resultMarks;
}

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

	markerCluster.clearMarkers();
	var resultMarkers=addMarkers(resultsRivers, resultsLakes);
	markerCluster.addMarkers(resultMarkers);

	if(resultsRivers.length>0 || resultsLakes.length>0){
		resultsHTML="<ul id='resultsUl'>";

		for (i = 0; i < resultsRivers.length; i++) {
			tempIndex=resultsRivers[i];
			resultsHTML+="<li class='river'><a href='#' id='"+tempIndex+"'>"+rivers[tempIndex].name+"</a></li>";

		}

		for (i = 0; i < resultsLakes.length; i++) {
			tempIndex=resultsLakes[i];
			resultsHTML+="<li class='lake'><a href='#' id='"+tempIndex+"'>"+lakes[tempIndex].water+"</a></li>";
		}

		resultsHTML+="</ul>";

	}else
		resultsHTML+="<p>No results found.</p>";

	$("#resultsHeader").text("Search Results");
	$("#resultsWindow").html(resultsHTML);

	$("li.river > a").click(function(){
		var which = $(this).attr('id');
		console.log(which);
		showInfo('river', which, true);
	});

	$("li.lake > a").click(function(){
		var which = $(this).attr('id');
		console.log(which);
		showInfo('lake', which, true);
	});

}

function showInfo(type, listIndex, search){

	if(searchOpen==false){
		$("#searchWindow").toggleClass("actived");
		searchOpen=true;
	}

	var headerHTML="";
	var resultsHTML="";

	if (type=='river') {
		var name=rivers[listIndex].name;
		var species=rivers[listIndex].fish_spec;
		var comments=rivers[listIndex].comments;
		//var regs=rivers[listIndex].spec_regs;
		var county=rivers[listIndex].county;
		var access=rivers[listIndex].public_acc;
		//var info=rivers[listIndex].site_wl;

		var long=rivers[listIndex].point_x;
		var lat=rivers[listIndex].point_y;

	}else if (type=='lake') {
		var name=lakes[listIndex].water;
		var species=lakes[listIndex].fish_speci;
		var comments=lakes[listIndex].comments;
		//var regs=lakes[listIndex].spec_regs;
		var county=lakes[listIndex].county;
		var access=lakes[listIndex].boat_launc;
		//var info=lakes[listIndex].weblink;

		var long=lakes[listIndex].point_x;
		var lat=lakes[listIndex].point_y;
	};
	if(search)
		map.setZoom(14);
	
	map.panTo(new google.maps.LatLng(lat, long));

	//if(regs==null)
	//	regs="None";

	if(access==null)
		access="None";

	if(comments==null)
		comments="None";

	headerHTML+=name;
	resultsHTML+="<ul>";
	if(search)
		resultsHTML+="<a href='#' id='back'>Back to results.</a>";

	//resultsHTML+="<li><a href='"+info+"'>Waterbody Information</a></li>";
	resultsHTML+="<li><h4>Fish Species:</h4><p>"+species+"</p></li>";
	resultsHTML+="<li><h4>County:</h4><p>"+county+"</p></li>";
	resultsHTML+="<li><h4>Latitude:</h4><p>"+lat+"</p></li>";
	resultsHTML+="<li><h4>Longitude:</h4><p>"+long+"</p></li>";	
	resultsHTML+="<li><h4>Public Access:</h4><p>"+access+"</p></li>";
	resultsHTML+="<li><h4>Comments:</h4><p>"+comments+"</p></li>";
	resultsHTML+="<li><h4>Pictures: </h4><div id='pics'></div></li></ul>";

	$("#resultsHeader").text(headerHTML);
	$("#resultsWindow").html(resultsHTML);

	getFlickrImg(name);

	if(search){
		$("#back").click(function() {
			searchItems()
		});	
	}
}

function getFlickrImg(tagName){
$(function(){
		
			tagName=tagName.replace('Upper/Lower ','');
			tagName=tagName.replace(' (Lower)','');
			tagName=tagName.replace(' (Upper)','');
			tagName=tagName.replace('Upper','');
			tagName=tagName.replace('Lower','');
			tagName=tagName.replace(' (Arcade)','');
			tagName=tagName.replace(' (Ellington)','');
			tagName=tagName.replace(' (Barge Canal)','');
			tagName=tagName.replace(' (N & S)','');
		

		console.log(tagName);

	    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	    {
	      tags: tagName,
	      tagmode: "any",
	      format: "json"
	    },
	    function(data) {
	    	$.each(data.items, function(i,item){
	        	$("<img/>").attr("src", item.media.m).attr("class", "img-responsive").appendTo("#pics");
	        
	        if ( i == 7 ) return false;
	      });
	    });
	});
}


//Loads google maps
function initialize()
{
	window.mapProp = {
	  center:new google.maps.LatLng(42.4,-77.8092041),
	  minZoom:7,
	  zoom:7,
	  mapTypeId:google.maps.MapTypeId.ROADMAP,
	  styles: [{"featureType":"water","stylers":[{"color":"#7accf0"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":3}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}]
		};

	window.map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	window.markers = [];
	var i;

	var pinIconR = new google.maps.MarkerImage(
		"img/riverMark.png",
		null, /* size is determined at runtime */
		null, /* origin is 0,0 */
		null, /* anchor is bottom center of the scaled image */
		new google.maps.Size(55, 27)
	); 

	var pinIconL = new google.maps.MarkerImage(
		"img/lakeMark.png",
		null, /* size is determined at runtime */
		null, /* origin is 0,0 */
		null, /* anchor is bottom center of the scaled image */
		new google.maps.Size(55, 27)
	); 

	for(i=0;i<rivers.length;i++){

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(rivers[i].point_y, rivers[i].point_x),
			map: map,
			icon:pinIconR,
			indexNum: i
		});

		google.maps.event.addListener(marker, 'click', function() {
			showInfo('river', this.indexNum);
		});
		
		markers.push(marker);
	}

	for(i=0;i<lakes.length;i++){

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lakes[i].point_y, lakes[i].point_x),
			map: map,
			icon:pinIconL,
			indexNum: i
		});

		google.maps.event.addListener(marker, 'click', function() {
			showInfo('lake', this.indexNum);
		});
		
		markers.push(marker);
	}

	window.markerCluster = new MarkerClusterer(map, markers);

}

google.maps.event.addDomListener(window, 'load', initialize);

var aboutOpen=true;
var searchOpen=false;

$(document).ready(function(){

	//Opens about window on click of title
	$("#about").click(function() {
		$("#aboutWindow").toggleClass("actived");

		if(aboutOpen==false)
			aboutOpen=true;
		else
			aboutOpen=false;
	});

	$("#aboutClose").click(function() {
		if(aboutOpen==true){
			$("#aboutWindow").toggleClass("actived");
			aboutOpen=false;
		}
	});	


	//Runs search on click
	$("#searchButton").click(function() {

		searchItems();

		if(searchOpen==false){
			$("#searchWindow").toggleClass("actived");
			searchOpen=true;
		}

	});

	$("#searchBox").keypress(function(e) {
   		if (e.keyCode == 13) {
			searchItems();

			if(searchOpen==false){
				$("#searchWindow").toggleClass("actived");
				searchOpen=true;
			}
		}
    });

	$("#searchClose").click(function() {
		if(searchOpen==true){
			$("#searchWindow").toggleClass("actived");
			searchOpen=false;
		}
	});	

});