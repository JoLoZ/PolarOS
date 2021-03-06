<html id="all">

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

        .login-wrapper {
            width: 30%;
            margin: 0;
            padding: 5px;
            z-index: -1;
        }

        .centered {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>

<body onload="onload();" data-auto_bg="nature,wallpaper">

    <div class="wrapper">
        <div class="card login-wrapper centered">
            <center>
                <img data-src="/assets/img/icons/logo.png" style="width:30%">


                <form>
                    <h2 class="step-fullscreen">Fullscreen mode suggested</h2>
                    <p class="step-fullscreen">PolarOS is best experienced in the distractionless fullscreen mode. While it's not forced, it really improves the experience.<br>You can easily enable and disable it using the <code>F11</code> key.</p>
                    <a href="javascript:destroyFullscreenChecker();step(1)" class="btn btn-link step-fullscreen">Continue without fulscreen</a>
                    <h2 class="step-1">Welcome!</h2>
                    <div class="form-group step-1">
                        <div class="input-group input-group-alternative mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><img data-src="/assets/img/icons/logo.png" style="height:100%"></span>
                            </div>
                            <input class="form-control form-control-alternative" placeholder="Username" type="text" id="username">
                        </div>
                    </div>
                    <div class="step-1" id="result-1"></div>
                    <a class="btn btn-primary step-1" href="javascript:checkUsername()">Continue</a>
                    <p class="step-1"></p>
                    <p class="step-1 float-right"><a href="javascript:step('reset')">Forgot your username?</a></p>
                    <p class="step-1 float-left"><a href="javascript:step('register')">Register an account</a></p>

                    <h2 class="step-2" id="welcome-user">Welcome UserNameHere!</h2>
                    <p><a href="javascript:step(1)" id="usernameReminder" class="step-2">Not you?</a></p>
                    <div class="form-group step-2">
                        <div class="input-group input-group-alternative mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><img data-src="/assets/img/icons/logo.png" style="height:100%"></span>
                            </div>
                            <input class="form-control form-control-alternative" placeholder="Password" type="password" id="password">
                            <div class="step-2" id="result-2"></div>
                        </div>
                    </div>
                    <a class="btn btn-primary step-2" href="javascript:step(3)">Login</a>
                    <p class="step-2"><a href="javascript:step('reset')">Forgot your password?</a></p>
                </form>

                <h2 class="step-3">Logging you in...</h2>

                <h2 class="step-success">Welcome back!</h2>

                <h2 class="step-remember">Should I remember you?</h2>
                <p class="step-remember">I can save a tiny bit of information on this device to remember you and only ask you for your password the next time. <span class="text-danger">Only enable this on private devices.</span></p>
                <a href="javascript:remember(); step('welcome')" class="btn btn-primary step-remember">Yes</a> <a href="javascript:step('welcome')" class="btn btn-secondary step-remember">No</a>

                <p class="step-welcome"></p>
                <div class="progress step-welcome">
                    <div class="progress-bar bg-transparent" id="loading-bar" role="progressbar" style="width: 0%;"></div>
                </div>

                <h2 class="step-register">Register for free</h2>
                <form class="step-register" id="register">
                    <div class="form-group">
                        <div class="input-group input-group-alternative mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><img data-src="/assets/img/icons/logo.png" style="height:100%"></span>
                            </div>
                            <input class="form-control form-control-alternative" id="register_username" type="text" placeholder="Username">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group input-group-alternative mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><img data-src="/assets/img/icons/logo.png" style="height:100%"></span>
                            </div>
                            <input class="form-control form-control-alternative" id="register_email" type="email" placeholder="eMail">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group input-group-alternative mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><img data-src="/assets/img/icons/logo.png" style="height:100%"></span>
                            </div>
                            <input class="form-control form-control-alternative" id="register_password" type="password" placeholder="Password">
                        </div>
                        <div class="text-danger" id="register_error">
                            </p>
                        </div>
                        <a href="javascript:step('register2')" class="btn btn-primary step-register">Sign up</a>
                </form>

            </center>
        </div>
    </div>

    <?php create_loadingScreen(); ?>

    <!-- Core -->
    <script src="/assets/js/core/jquery.min.js"></script>
    <script src="/assets/js/core/popper.min.js"></script>
    <script src="/assets/js/core/bootstrap.min.js"></script>
    <!-- Theme JS -->
    <script src="/assets/js/argon-design-system.min.js"></script>

    <script src="/assets/js/app.js"></script>

    <script>
        function hideAll() {
            $(".step-fullscreen").slideUp("slow");
            $(".step-1").slideUp("slow");
            $(".step-2").slideUp("slow");
            $(".step-3").slideUp("slow");
            $(".step-success").slideUp("slow");
            $(".step-remember").slideUp("slow");
            $(".step-welcome").slideUp("slow");
            $(".step-reset").slideUp("slow");

            $(".step-register").slideUp("slow");
            $(".step-register2").slideUp("slow");
        }

        function step(number) {
            $("#usernameReminder").text("Not " + $("#username").val() + "?");
            $("#welcome-user").text("Welcome " + $("#username").val() + "!");
            hideAll();
            $(".step-" + number).slideDown("slow");
            window["step_" + number]();
        }

        function step_1() {}

        function step_2() {}

        function step_3() {
            setTimeout(function() {
                login();
            }, 500)
        }

        function step_success() {
            setTimeout(function() {
                step('remember');
            }, 1500)
        }

        function step_remember() {}

        function step_welcome() {
            $("#loading-placeholder").hide();
            //var loadingBarAnimationTimer = setInterval(update_loading_bar, 50);
            $("#loading-bar-0").show();
            setTimeout(function() {
                $(".loading-screen").fadeIn("1000");
            }, 1700)

            setTimeout(function() {
                window.open("/", "_self");
            }, 2700)
        }

        function step_fullscreen() {}

        function step_register() {
            $("#register-username").val($("#username").val())

        }

        function remember() {
            console.log("Remembered");
        }

        function step_reset() {
            alert("WIP");
            step(1);
        }


        hideAll();
        updateImages();

        clearInterval(loadingBarAnimationTimer);
        $(".loading-boot").hide();

        setTimeout(function() {
            $(".loading-screen").fadeOut("slow");
        }, 500);

        var fschecker;

        function destroyFullscreenChecker() {
            clearInterval(fschecker);
        }

        function onload() {

            if ((window.fullScreen) ||
                (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
                step(1);
            } else {
                step("fullscreen");

                fschecker = setInterval(function() {
                    if ((window.fullScreen) ||
                        (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
                        destroyFullscreenChecker();
                        step(1);
                    }
                }, 200);
            }
        }

        function checkUsername() {
            $("#result-1").load("/?api=true&action=checkUsername&username=" + $("#username").val());
        }

        var loginSuccess

        function login() {
            loginSuccess = false;
            $.post("/", {
                    api: true,
                    action: "login",
                    username: $("#username").val(),
                    password: $("#password").val()
                })
                .done(function(data) {
                    $("#result-2").html(data);
                    if (loginSuccess) {
                        step("success");
                    } else {
                        step(2);
                    }
                });
        }

        function step_register2() {
            $.post("/", {
                    api: true,
                    action: "register",
                    username: $("#register_username").val(),
                    email: $("#register_email").val(),
                    password: $("#register_password").val()
                })
                .done(function(data) {
                    $("#register_error").html(data);
                });
        }
    </script>
</body>

</html>