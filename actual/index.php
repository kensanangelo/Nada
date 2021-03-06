<?php

	include 'includes/connectNY.php';
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nada Maps</title>
	
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/styles.css">
	
	<script	src="http://maps.googleapis.com/maps/api/js?key=AIzaSyArNFTlstSX6IZDDmgTJI5YZ7mAnST6glc&sensor=false"></script>
	<?php include "includes/map.php" ?>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/data.json"></script>
	<script type="text/javascript" src="js/markerclusterer.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Bubblegum+Sans' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Karla:700,400' rel='stylesheet' type='text/css'>

</head>

<body>
	<div id="mobile">
		<h1>This site is unavailable on mobile</h1>
		<p>Please use a computer with a larger monitor to access this site.</p>
	</div>
	<div id="header">
		<a id="about" href=#><h2>Nada Maps</h2><img class="logo" src="img/fishhook.svg" alt="Fish with hook"></a>
		<p class="credits">Created by Ken San Angelo & Sam Griffith</p>
		<div id="search">
  			<input type="search" id='searchBox' name="fishsearch" placeholder='Search Here'>
  			<input type="button" value="Search"  id='searchButton'/>
		</div>
	</div>

	<div id="googleMap"></div>

	<div id="aboutWindow">
		<div>
			<div class="row">
				<h3 class='col-md-8' id='aboutHeader'>Welcome to<br/>Nada Maps!</h3>
				<button type="button" class="close pull-right" id='aboutClose'><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
			</div>
			<div class="windowContent">
				<p class="col-md-12">
					Let's figure out where you're fishing today!
				</p>
				<hr/>
				<p class="col-md-12">Zoom in on the map and you'll see two kinds of locations:</p>
				<img class="col-md-3 img-responsive" src="img/lakeMark.svg" alt="Lake Map Marker">
				<div class="col-md-9">
					<p>This little guy means the spot is a lake.<p>
				</div>
				<hr/>
				<img class="col-md-3 img-responsive" src="img/riverMark.svg" alt="River Map Marker">
				<div class="col-md-9">
					<p>And this one is a river.<p>
				</div>
				<hr/>
				<p class="col-md-12">Select a point to see information about it or use the Search bar for a specific location, type of fish, or county!</p>
				<hr/>
				<p class="col-md-12">Just select "Nada Maps" or the image in the top left corner to see this again</p>
			</div>
		</div>
	</div>

	<div id="searchWindow">
		<div>
			<div class="row">
				<h3 class='col-md-8' id='resultsHeader'>Search Results</h3>
				<button type="button" class="close pull-right" id='searchClose'><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
			</div>
			<div id='resultsWindow'>
				<p class="col-md-12">No results found.</p>
			</div>
		</div>
	</div>

	<img class="animation2 movingfish2" src="img/animation2.svg" alt="Fish with bubbles">
	<img class="animation movingfish" src="img/animation.svg" alt="Fish with bubbles">
	<div id="footer">
		<img src="img/waves.svg" alt="Waves">
	</div>

	<script src="js/bootstrap.min.js"></script>

</body>
</html>