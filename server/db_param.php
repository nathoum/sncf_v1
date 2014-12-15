<?php
	session_start();
	$host = "***";
    $database="***";
    $username = "***"; 
    $password = "***";  
    
    $connexion = mysql_connect($host, $username, $password);
    mysql_select_db($database, $connexion);

?>