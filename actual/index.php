<?php
  require_once("socrata.php");

  $app_token="3TA3iFYuZGCNVPXC3QZp7LMnL";
  $url="http://data.ny.gov";

  $socrata = new Socrata($url, $app_token);

//  $params = array("\$where" => "within_circle(location, $latitude, $longitude, $range)");


  $response = $socrata->get("/resource/f4vj-p8y5.json");

?>
<html>
  <head>
    <title>Nada</title>
  </head>
  <body>
    <h1>Nada Test</h1>

    <?php if($response == NULL) { ?>
      <h2>Didn't Work :(</h2>
    <?php } else { ?>
      <h2>Results</h2>

      <?# Create a table for our actual data ?>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>County</th>
          <th>Longitude</th>
          <th>Latitude</th>
        </tr>
        <?# Print rows ?>
        <?php foreach($response as $row) { ?>
          <tr>
            <td><?= $row["name"] ?></td>
            <td><?= $row["county"] ?></td>
            <td><?= $row["point_x"] ?></td>
            <td><?= $row["point_y"] ?></td>
          </tr>
        <?php } ?>
      </table>

      <h3>Raw Response</h3>
      <pre><?= var_dump($response) ?></pre>
    <?php } ?>
  </body>
</html>

