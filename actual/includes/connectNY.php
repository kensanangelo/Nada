<?php
  require_once("socrata.php");

  $app_token="3TA3iFYuZGCNVPXC3QZp7LMnL";
  $url="http://data.ny.gov";

  $socrata = new Socrata($url, $app_token);

//  $params = array("\$where" => "within_circle(location, $latitude, $longitude, $range)");


  $rivers = $socrata->get("/resource/jcxg-7gnm.json");
  $lakes = $socrata->get("/resource/mw8j-wduf.json");

?>