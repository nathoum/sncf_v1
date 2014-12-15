<?php
  
  session_start();
  //echo $_SESSION['station'];
  $station = $_SESSION['station'];
  //echo $station;
  /* test */
  //if( $station == '' || $station == 0) {
    //header('Location: ../search.php');
    //test : faire la mm logique dans le js : redirection
  //}

	$host = "mysql51-117.perso";
    $database="nathaliefmbdd";
    $username = "nathaliefmbdd"; 
    $password = "commun77";   
    
    $server = mysql_connect($host, $username, $password);
    $connection = mysql_select_db($database, $server);

    //echo $station;

    $sql = "SELECT * FROM `sncf_station` WHERE `name` = '$station'";
    $result = mysql_query($sql);
    while ($row = mysql_fetch_assoc($result)) {
      //echo $row["code"];
      $zone = $row["zone"];
    }

    $request = "SELECT * FROM `sncf_passengers` WHERE `station` = '$station'";
    $result = mysql_query($request);
    while ($row = mysql_fetch_assoc($result)) {
      $passengers = $row["passengers"];
    }


    $myquery = "SELECT * FROM `sncf_machines_sales` WHERE `station` LIKE '%$station%'";

    //echo $mysql_query;
    //echo "<br/>";
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
              "1" => $row['samedi_01'],
              "2" => $row['dimanche_02'],
              "3" => $row['lundi_03'],
              "4" => $row['mardi_04'],
              "5" => $row['mercredi_05'],
              "6" => $row['jeudi_06'],
              "7" => $row['vendredi_07'],
              "8" => $row['samedi_08'],
              "9" => $row['dimanche_09'],
              "10" => $row['lundi_10'],
              "11" => $row['mardi_11'],
              "12" => $row['mercredi_12'],
              "13" => $row['jeudi_13'],
              "14" => $row['vendredi_14'],
              "15" => $row['samedi_15'],
              "16" => $row['dimanche_16'],
              "17" => $row['lundi_17'],
              "18" => $row['mardi_18'],
              "19" => $row['mercredi_19'],
              "20" => $row['jeudi_20'],
              "21" => $row['vendredi_21'],
              "22" => $row['samedi_22'],
              "23" => $row['dimanche_23'],
              "24" => $row['lundi_24'],
              "25" => $row['mardi_25'],
              "26" => $row['mercredi_26'],
              "27" => $row['jeudi_27'],
              "28" => $row['vendredi_28'],
              "29" => $row['samedi_29'],
              "30" => $row['dimanche_30'],
               "31" => $row['lundi_31'],
               "line" => $row['line'],
               "zone" => $zone,
               "passengers" => $passengers,

              );
         }
    echo json_encode($data);
    mysql_close($server);





    ?>