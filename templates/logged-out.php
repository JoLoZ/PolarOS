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
        <center>
            <img data-src="/assets/icons/logo.png" style="width:30%">


            <form>
                <h2 class="step-1">Welcome!</h2>
                <div class="form-group step-1">
                    <div class="input-group input-group-alternative mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><img data-src="/assets/icons/logo.png" style="height:100%"></span>
                        </div>
                        <input class="form-control form-control-alternative" placeholder="Username" type="text" id="username">
                    </div>
                </div>
                <a href="#" class="btn btn-primary step-1" onclick="step(2)">Continue</a>
                <h2 class="step-2">Welcome back UserNameHere!</h2>
                <p><a href="#" onClick="step(1)" id="usernameReminder" class="step-2">Not you?</a></p>
                <div class="form-group step-2">
                    <div class="input-group input-group-alternative mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><img data-src="/assets/icons/logo.png" style="height:100%"></span>
                        </div>
                        <input class="form-control form-control-alternative" placeholder="Password" type="password" id="password">
                    </div>
                </div>
                <a href="#" class="btn btn-primary step-2" onclick="step(3)">Login</a>
                <p><a href="#" onClick="step('reset')" id="reset-link">Forgot your creditals?</a>
            </form>
            <h2 class="step-3">Logging you in...</h2>
            <h2 class="step-success">Welcome back!</h2>
            <h2 class="step-remember">Should I remember you?</h2>
            <p class="step-remember">I can save a tiny bit of information on this device to remember you and only ask you for your password the next time. <span class="text-danger">Only enable this on private devices.</span></p>
            <a href="#" onClick="remember(); step('welcome')" class="btn btn-primary step-remember">Yes</a> <a href="#" onclick="step('welcome')" class="btn btn-secondary step-remember">No</a>
            <h2 class="step-welcome">Hang tight, I'm loading your homescreen</h2>
            <div class="progress step-welcome">
                <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
            </div>
        </center>
        <script>
            function hideAll() {
                $(".step-1").slideUp("slow");
                $(".step-2").slideUp("slow");
                $(".step-3").slideUp("slow");
                $(".step-success").slideUp("slow");
                $(".step-remember").slideUp("slow");
                $(".step-welcome").slideUp("slow");
                $(".step-reset").slideUp("slow");
            }

            function step(number) {
                $("#usernameReminder").text("Not " + $("#username").val() + "?");
                hideAll();
                $(".step-" + number).slideDown("slow");
                window["step_" + number]();
            }

            function step_1() {
                $("#reset-link").slideDown("slow");
            }

            function step_2() {}

            function step_3() {
                $("#reset-link").slideUp("slow");
                setTimeout(function() {
                    step('success');
                }, 1500)
            }

            function step_success() {
                setTimeout(function() {
                    step('remember');
                }, 1500)
            }

            function step_remember() {}

            function step_welcome() {}

            function remember() {
                console.log("Remembered");
            }

            function step_reset() {
                $("#reset-link").slideUp("slow");
                alert("WIP");
                step(1);
            }
        </script>
    </div>
    <!-- Core -->
    <script src="/assets/js/core/jquery.min.js"></script>
    <script src="/assets/js/core/popper.min.js"></script>
    <script src="/assets/js/core/bootstrap.min.js"></script>
    <!-- Theme JS -->
    <script src="/assets/js/argon-design-system.min.js"></script>

    <script src="/assets/js/app.js"></script>
</body>