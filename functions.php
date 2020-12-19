<?php
require_once "db/SleekDB.php";
function db($name)
{
    $dataDir = "db/data";
    return \SleekDB\SleekDB::store($name, $dataDir);
}

function user()
{
    $users = db("users")->where("_id", "=", $_SESSION['id'])->fetch();
    foreach($users as $user){
        return $user;
    }
}

function theme()
{
    return user()['settings']['theme'];
}


function create_loadingScreen()
{
?>
    <style>
        .loading-screen {
            height: 100vh;
            width: 100%;
            position: fixed;
            background-color: black;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            z-index: 9999;
        }

        .loading-centered {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
    <div class="loading-screen" data-bg_src="/assets/img/boot.jpg">
        <div class="loading-centered text-white" style="width:30%">
            <center>

                <img data-src="/assets/img/icons/logo.png" style="width:30%;">
                <p>
                </p>
                <div class="progress loading-boot" id="loading-bar-0">
                    <div class="progress-bar bg-transparent" role="progressbar" style="width: 100%;"></div>
                </div>
                <?php
                $c = 1;
                $w1 = 0;
                $w2 = 0;
                while ($c != 119) {
                ?>
                    <div class="progress loading-boot" id="loading-bar-<?php echo $c ?>" style="display: none">
                        <div class="progress-bar bg-transparent" role="progressbar" style="width: <?php echo $w1 ?>%;"></div>
                        <div class="progress-bar bg-primary" role="progressbar" style="width: <?php echo $w2 ?>%;"></div>
                    </div>
                <?php
                    $c = $c + 1;
                    if ($c < 20) {
                        $w2 = $w2 + 1;
                    } elseif ($c > 101) {
                        $w1 = $w1 + 1;
                        $w2 = $w2 - 1;
                    } else {
                        $w1 = $w1 + 1;
                    }
                }

                ?>

            </center>
        </div>
    </div>
<?php
}
