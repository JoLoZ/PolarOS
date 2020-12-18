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

    </style>
</head>

<body onload="onload()">

        <?php create_loadingScreen(); ?>

    <p>Debugging is fun!</p>
    <button onclick="window.open('/', '_self')">Make it end</button>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <!-- Core -->
    <script src="/assets/js/core/jquery.min.js"></script>
    <script src="/assets/js/core/popper.min.js"></script>
    <script src="/assets/js/core/bootstrap.min.js"></script>
    <!-- Theme JS -->
    <script src="/assets/js/argon-design-system.min.js"></script>

    <script src="/assets/js/app.js"></script>

    <script>
        updateImages();

        function onload() {
            //$(".loading-screen").fadeOut("slow");
        }
    </script>
</body>