<?php

ini_set('display_errors', '0'); ini_set('display_startup_errors', '0'); error_reporting(E_ALL);
session_start();
include "functions.php";

if($_REQUEST['debug']){
    include "templates/debug.php";
    die();
}

if($_REQUEST['api']){
    include "templates/api.php";
    die();
}

if(user()){
    echo "WIP";
}else{
    include "templates/logged-out.php";
}