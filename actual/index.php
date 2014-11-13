<?php
	include 'includes/connectNY.php';

?><!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="styles/styles.css">
	<script	src="http://maps.googleapis.com/maps/api/js?key=AIzaSyArNFTlstSX6IZDDmgTJI5YZ7mAnST6glc&sensor=false"></script>
	<?php include "includes/map.php" ?>

</head>

<body>
	<div id="header">
		<a href=#><h2>NADA maps</h2></a>
	</div>

	<div id="googleMap"></div>

	<div id="footer">
		<a href=#><h2 class="about" >About</h2></a>
		<img src="img/waves.svg" alt="Waves">
		
	</div>

</body>
</html>