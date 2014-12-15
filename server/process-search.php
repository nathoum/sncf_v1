<?php
	


			include("db_param.php");

			$station = $_POST["station"];
			

			$sql = "SELECT * FROM `sncf_station` WHERE `name` LIKE '%$station%'";
		    //echo $sql;
		    $result = mysql_query($sql);
		    while ($row = mysql_fetch_assoc($result)) {
		      //echo $row["code"];
		      $namestation = $row["name"];
		    }
		    $_SESSION['station'] = $namestation;

			header('Location: ../information.php');
			

