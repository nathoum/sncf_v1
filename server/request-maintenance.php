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

    $sql = "SELECT * FROM `sncf_station` WHERE `name` LIKE '%$station%'";
    //echo $sql;
    $result = mysql_query($sql);
    while ($row = mysql_fetch_assoc($result)) {
      //echo $row["code"];
      $code = $row["code"];
    }

    $myquery = "SELECT  `sncf_area`, `category_theme`, COUNT(`category_theme`) as count_theme
                FROM  `sncf_supervision` 
                 WHERE `name_tool` LIKE '%$code%'
                GROUP BY `category_theme`";
    //echo $myquery;
    $query = mysql_query($myquery);
    
    if ( ! $query ) {
        echo mysql_error();
        die;
    }


    $data = array();

    
        //echo $total;
     while ($row = mysql_fetch_assoc($query))
         {
          
              $data[] = array(
              "area" => $row['sncf_area'],
              "count_theme" => $row['count_theme'],
              "categorytheme" => $row['category_theme']
              );
         }
    echo json_encode($data);
    mysql_close($server);





    ?>