<?php
	include 'includes/connectNY.php';

?><!DOCTYPE html>
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
	</div>

	<div id="googleMap"></div>

	<div id="aboutWindow">
		<h2>About<h2>
		<p>Check me out</p>
	</div>

	<div id="footer">
		<a href=#><h2 id="about">About</h2></a>
		<img src="img/waves.svg" alt="Waves">
	</div>

</body>
</html>