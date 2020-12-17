<?php
require_once "db/SleekDB.php";
function db($name)
{
    $dataDir = "db/data";
    return \SleekDB\SleekDB::store($name, $dataDir);
}

function user()
{
    return db("users")->where("_id", "=", $_SESSION['id'])->fetch();
}

function theme()
{
    return user()['settings']['theme'];
}
