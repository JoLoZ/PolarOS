<?php

switch ($_REQUEST['action']) {
    case "checkUsername":
        $temp = db("users")->where("username", "=", $_REQUEST['username'])->fetch();
        foreach ($temp as $user) {
            echo '<script>step(2);</script>';
            die();
        }
        echo "<span class='text-danger'>That username doesn't exist.</span>";
        die();
        break;
    case "login":
        $temp = db("users")->where("username", "=", $_REQUEST['username'])->where("password", "=", password_hash($_REQUEST['password']))->fetch();
        foreach ($temp as $user) {
            echo '<script>loginSuccess = true;</script>';
            die();
        }
        echo "<span class='text-danger'>The username/password combination does not match.</span>";
        die();
}
