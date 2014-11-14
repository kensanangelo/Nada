<?php

	include 'includes/connectNY.php';
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="styles/styles.css">
	<script	src="http://maps.googleapis.com/maps/api/js?key=AIzaSyArNFTlstSX6IZDDmgTJI5YZ7mAnST6glc&sensor=false"></script>
	<?php include "includes/map.php" ?>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>

</head>

<body>
	<div id="header">
		<a href=#><h2>NADA maps</h2></a>
		<form id="search" action=#>
  			<input type="search" name="fishsearch">
  			<input type="submit" value="Search">
		</form>
	</div>

	<div id="googleMap"></div>

	<div id="aboutWindow">
		<div class="windowContent">
<<<<<<< HEAD
			<h3>Welcome to Nada Maps!</h3>
			<p>Are you a fish? Do you find it hard to avoid being caught by fisherman when going to your favorite lakes and rivers? Don't you wish there was a way to know where fisherman went to avoid them all together? Well, now there is!<br/>Welcome to Nada Maps! We show you the most popular fishing spots in all of New York, and where the fisherman are going for certain fish. Click on a point to learn more about it, or use the search up above.</p>
=======
			<h3>About</h3>
			<p>Check me out</p>
>>>>>>> origin/Interface
		</div>
	</div>

	<div id="searchWindow">
		<div class="windowContent">
			<h3>Search</h3>
			<p>Check out my fishes</p>
		</div>
	</div>

	<div id="footer">
		<a href=#><h2 id="about">About</h2></a>
		<img src="img/waves.svg" alt="Waves">
	</div>

</body>
</html>