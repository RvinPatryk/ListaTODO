<?php

function gettasks($userid){

    global $conn;
    $ret= array();


    $result = pg_query_params($conn, 'SELECT id, content FROM tasks WHERE userid = $1;', array($userid));
    if  (!$result) {
        $ret['status']= "error";
    }  else{
        $ret['data']= array();
        while ($row = pg_fetch_assoc($result)){
            $data= array();
            $data ['id']= $row['id'];
            $data ['text']= $row['content'];

            $ret['data'][]= $data;

        }
        $ret['status']= "ok";
    }


    return($ret);
} 

function createtask($userid, $params){
    global $conn;
    $ret= array();
    if (!isset ($params['content'])){
        $ret['status']= "error";
        $ret['errordesc']= "no content";
    } else{
        $result = pg_query_params($conn, 'INSERT into tasks (content, userid, status) values ($1, $2, 1);', array($params['content'], $userid));
        if (!$result){
            $ret['status']= "error";  
            $ret['errordesc']= pg_last_error($conn);
        } else{
            $ret['status']= "ok";
        }
    }

    return($ret);
} 

?>