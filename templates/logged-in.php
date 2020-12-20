    <?php
    if ($_REQUEST['run']) {
        include "in/app.php";
    } elseif ($_REQUEST['do']) {

        switch ($_REQUEST['do']) {
            case "home":
                include "in/home.php";
                break;
        }
    } else {
    ?>

        <head>

            <title>PolarOS</title>

            <link type="text/css" href="/assets/css/app.css" rel="stylesheet">

            <!-- Fonts -->
            <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" rel="stylesheet">

            <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">

            <!-- Theme CSS -->
            <link type="text/css" href="/assets/css/argon-design-system.min.css" rel="stylesheet">

            <style>
                body {
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-position: center;
                    background-size: cover;
                }

                .icon {
                    height: 5rem;
                    width: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;
                }

                .icon-grid {
                    column-count: 8;
                    width: 50rem;
                }

                .icon-menu {
                    column-count: 5;
                    width: 25rem;
                }

                .centered {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .home-contatiner {
                    height: 100%;
                    padding: 0px;
                    margin: 0px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                }
            </style>
        </head>

        <body onload="onload()">

            <!-- Core -->
            <script src="/assets/js/core/jquery.min.js"></script>
            <script src="/assets/js/core/popper.min.js"></script>
            <script src="/assets/js/core/bootstrap.min.js"></script>
            <!-- Theme JS -->
            <script src="/assets/js/argon-design-system.min.js"></script>
            <!-- Plugins -->
            <script src="/assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
            <script src="/assets/js/plugins/gridstrap.js"></script>

            <script src="/assets/js/app.js"></script>

            <script>
                function onload() {
                    $(".loading-screen").fadeOut("slow");
                }
            </script>

        <?php create_loadingScreen();
        include "in/windowmanager.php";
        echo "<script>createWindow('/?do=home', 'home', '/assets/img/icons/logo.png')</script></body>";
    }
        ?>