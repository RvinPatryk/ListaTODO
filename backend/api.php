<?php
session_start();
include ('connect.php');
include ('users_inc.php');
include ('tasks.php');
//print($_POST['content']);
//exit;
$ac=$_POST['ac'];
if ($ac=='login'){
	$username=$_POST['username'];
	$password=$_POST['password'];
	
	
	$result=checkuser ($username, $password);
} else if($ac== 'islogged'){
	if(islogged()){
		$result= array('status'=> 'ok');
	}	else{
		$result=array('status'=> 'error');
	} 
	
} else if($ac== 'logout'){
	logout();
	$result= array('status'=> 'ok');
} else if (isset ($_SESSION['userid'])) {
	if ($ac== 'gettasks'){
		$result= gettasks($_SESSION['userid']);	
	} else if ($ac== 'createtask'){

		$result= createtask($_SESSION['userid'], $_POST);
	}
}

print (json_encode($result));