<?php

switch ($_REQUEST['action']) {
    case "checkUsername":
        $temp = db("users")->where("username", "=", $_REQUEST['username'])->fetch();
        foreach ($temp as $user) {
            echo '<script>step(2);</script>';
            die();
        }

        echo "<span class='text-danger'>This username doesn't exist. Maybe you made a typo?</span>";
        die();
        break;
    case "login":
        $temp = db("users")->where("username", "=", $_REQUEST['username'])->fetch();
        foreach ($temp as $user) {
            if (password_verify($_REQUEST['password'], $user['password'])) {
                echo '<script>loginSuccess = true;</script>';
                $_SESSION['id'] = $user['_id'];
                die();
            }
        }

        echo "<span class='text-danger'>The username/password combination does not match.</span>";
        die();
        break;
    case "register":
        $fail = 0;
        $temp = db("users")->where("username", "=", $_REQUEST['username'])->fetch();
        foreach ($temp as $user) {
            echo "That username is already taken. Maybe you want to <a href='#' onclick='step(1)'>login</a>?";
            die();
        }
        if (!$_REQUEST['username']) {
            echo "Please provide a valid username.<br>";
            $fail = 1;
        }

        if (!filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)) {
            echo "Please provide a valid email.<br>";
            $fail = 1;
        }

        if (!$_REQUEST['password']) {
            echo "Please provide a secure password.<br>";
            $fail = 1;
        }

        if ($fail == 1) {
            echo "<script>step('register');</script>";
        } else {
            $user = [
                "username" => $_REQUEST['username'],
                "email" => $_REQUEST['email'],
                "password" => password_hash($_REQUEST['password'], PASSWORD_DEFAULT),
            ];
            $user = db("users")->insert($user);
            $_SESSION['id'] = $user['_id'];

            echo "<script>step('remember');</script>";
        }
}
