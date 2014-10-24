<?php
  require_once("socrata.php");

  $app_token="3TA3iFYuZGCNVPXC3QZp7LMnL";
  $url="http://data.ny.gov";

  $socrata = new Socrata($url, $app_token);

//  $params = array("\$where" => "within_circle(location, $latitude, $longitude, $range)");


  $response = $socrata->get("/resource/f4vj-p8y5.json");

?>