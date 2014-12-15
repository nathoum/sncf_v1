<?php

session_start();

$host = "***";
$database="***";
$username = "***"; 
$password = "***";   

$server = mysql_connect($host, $username, $password);
$connection = mysql_select_db($database, $server);
mysql_query("SET NAMES UTF8");

$typemaintenance = $_POST["idea"];
$solution = $_POST["solution"];

echo ($typemaintenance." - ".$solution);

$category = 0;
/*if($typemaintenance == "4") {
	$category = "après-vente";
}*/
switch ($typemaintenance) {
    case "1":
        $category = "applicatif";
    break;
    case "2":
        $category = "données";
    break;
    case "3":
        $category = "vente";
    break;
    case "4":
        $category = "après-vente";
    break;
    case "5":
        $category = "réseau";
    break;
    case "6":
        $category = "matériel";
    break;
}

    $sql = "INSERT INTO sncf_advice (category, solution, created_at)
 	VALUES ('$category', '$solution', now()) ";
 	echo $sql;
   	$result = mysql_query($sql);

    header('Location: ../action.html');