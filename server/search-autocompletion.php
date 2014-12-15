<?php
	


			include("db_param.php");
			

	       		$val = $_GET["station"];

				$request ="SELECT DISTINCT name FROM sncf_station
				WHERE name LIKE '%".$val."%'
				ORDER BY name ASC
				LIMIT 6;";
	
				$result=mysql_query($request,$connexion);

				while($row = mysql_fetch_assoc($result)) {
					$stations[] = $row;
				}

				echo json_encode($stations);


