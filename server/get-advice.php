<?php
  
  session_start();
  //echo $_SESSION['station'];
  $station = $_SESSION['station'];
	$host = "***";
    $database="***";
    $username = "***"; 
    $password = "***";   
    
    $server = mysql_connect($host, $username, $password);
    $connection = mysql_select_db($database, $server);
    mysql_query("SET NAMES UTF8");

   /* $sql = "SELECT * FROM `sncf_advice`";
    //echo $sql;
    $result = mysql_query($sql);
    while ($row = mysql_fetch_assoc($result)) {
      //echo $row["code"];
      $code = $row["code"];
    }*/

    $myquery = "SELECT * FROM `sncf_advice`";

  /*  $result = mysql_query($myquery);
    while ($row = mysql_fetch_assoc($result)) {
      //echo $row["code"];
      $solution = $row["solution"];
      echo $solution;
    }*/


    //echo $myquery;
    $query = mysql_query($myquery);
    
    if ( ! $query ) {
        echo mysql_error();
        die;
    }


    $data = array();

         while ($row = mysql_fetch_assoc($query))
         {

              $data[] = array(
              "category" => $row['category'],
              "solution" => $row['solution'],
              "created_at" => $row['created_at']
              );
         }

    echo json_encode($data);
    mysql_close($server);





    ?>