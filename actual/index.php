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
	<script type="text/javascript" src="js/scripts.js"></script>

</head>

<body>
	<div id="header">
		<a href=#><h2 id="about">NADA maps</h2></a>
		<form id="search" action=#>
  			<input type="search" id='searchBox' name="fishsearch" placeholder='Search Here'>
  			<input type="submit" value="Search">
		</form>
	</div>

	<div id="googleMap"></div>

	<div id="aboutWindow">
		<div class="windowContent">
			<div class="row">
				<h3 class='col-md-6' id='resultsHeader'>Welcome to Nada Maps!</h3>
				<button type="button" class="close pull-right" id='aboutClose'><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
			</div>
			<p>Are you a fish? Do you find it hard to avoid being caught by fisherman when going to your favorite lakes and rivers? Don't you wish there was a way to know where fisherman went to avoid them all together? Well, now there is!<br/>Welcome to Nada Maps! We show you the most popular fishing spots in all of New York, and where the fisherman are going for certain fish. Click on a point to learn more about it, or use the search up above.</p>
		</div>
	</div>

	<div id="searchWindow">
		<div class="windowContent">
			<div class="row">
				<h3 class='col-md-6' id='resultsHeader'>Search Results</h3>
				<button type="button" class="close pull-right" id='searchClose'><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
			</div>
			<div id='resultsWindow'>
				<p>No results found.</p>
			</div>
		</div>
	</div>

	<div id="footer">
		<img src="img/waves.svg" alt="Waves">
	</div>

	<script src="js/bootstrap.min.js"></script>

</body>
</html>