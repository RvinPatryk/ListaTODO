<?php

	$host = "127.0.0.1";
	$db_user = "todo";
	$db_password = '7o=JK{p5c{iyEs"Ag&B9';
	$db_name = "todo";
	$connStr = "host={$host} port=5432 dbname={$db_name} user={$db_user} password={$db_password}";
	
	$conn = pg_connect($connStr);
	if (!$conn){ 
		print ("db error");
		exit;
	} 


?>