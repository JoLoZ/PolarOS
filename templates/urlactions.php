<?php
switch ($_REQUEST['action']){
    case "logout":
        session_destroy();
        header("Location: /");
        break;
}
?>