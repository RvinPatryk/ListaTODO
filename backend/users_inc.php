<?php

function checkuser($username, $password){
    global $_SESSION;
    global $conn;
    $ret= array();
    $password_md5=md5($password);
    $result = pg_query_params($conn, 'SELECT id, name, surname, user_role FROM users WHERE login = $1 and password = $2 limit 1', array($username, $password_md5));
    if  (!$result) {
        $ret['status']= "error";
    } 
    else {
        if ($row = pg_fetch_assoc($result)){
            $ret['status']= "ok";
            $ret['name']= $row['name'];
            $ret['surname']= $row['surname'];
            $ret['role']= $row['user_role'];
            $_SESSION['userid']= $row['id'];
            $_SESSION['name']= $row['name'];
            $_SESSION['surname']= $row['surname'];
            $_SESSION['role']= $row['user_role'];
        } else {
            $ret['status']= "error";
            //$ret['debug']= "SELECT id, name, surname, role FROM users WHERE login = '$username' and password = '$password_md5' limit 1";
        }
    }
    return($ret);

}

function islogged(){
    global $_SESSION;
    if (@!$_SESSION['userid']){
        return (false);
    }
    
    return (true);
    
}
function logout(){
    global $_SESSION;
    $_SESSION= array();
    return(true);
}
?>