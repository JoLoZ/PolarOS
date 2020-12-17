<head>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" rel="stylesheet">

    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">

    <!-- Theme CSS -->
    <link type="text/css" href="/assets/css/argon-design-system.min.css" rel="stylesheet">
    <link type="text/css" href="/assets/css/app.css" rel="stylesheet">
    <style>
        body {
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
        }

        .login-wrapper {
            width: 30%;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>

<body id="body" data-auto_bg="nature,wallpaper">
    <div class="card login-wrapper">
        <div class="progress">
            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
        </div>
        <center>
            <img data-src="/assets/icons/logo.png" style="width:30%">
            <h2>Welcome back!</h2>
            <form>
                <div class="form-group">
                    <div class="input-group input-group-alternative mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><img data-src="/assets/icons/logo.png" style="height:100%"></span>
                        </div>
                        <input class="form-control form-control-alternative" placeholder="Username" type="text" id="username">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Continue</button>
            </form>
        </center>
    </div>
    <!-- Core -->
    <script src="/assets/js/core/jquery.min.js"></script>
    <script src="/assets/js/core/popper.min.js"></script>
    <script src="/assets/js/core/bootstrap.min.js"></script>
    <!-- Theme JS -->
    <script src="/assets/js/argon-design-system.min.js"></script>

    <script src="/assets/js/app.js"></script>
</body>