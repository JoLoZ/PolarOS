<html id="all">

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
            padding: 5px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>

<body onload="onload();" data-auto_bg="nature,wallpaper">
    <div class="wrapper">
        <div style="padding:1rem">
            <h1 class="text-white" style="font-size: 5rem; line-height: 0.7;">00:00</h1>
            <h1 class="text-white" style="line-height: 0.7;">00.00.0000</h1>
        </div>
        <div class="card login-wrapper">
            <center>
                <img data-src="/assets/icons/logo.png" style="width:30%">


                <form>
                    <h2 class="step-fullscreen">Fullscreen mode suggested</h2>
                    <p class="step-fullscreen">BoxOS is best experienced in the distractionless fullscreen mode. While it's not forced, it really improves the experience.<br>You can easily enable and disable it using the <code>F11</code> key.</p>
                    <a href="#" onclick="destroyFullscreenChecker();step(1)" class="btn btn-link step-fullscreen">Continue without fulscreen</a>
                    <h2 class="step-1">Welcome!</h2>
                    <div class="form-group step-1">
                        <div class="input-group input-group-alternative mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><img data-src="/assets/icons/logo.png" style="height:100%"></span>
                            </div>
                            <input class="form-control form-control-alternative" placeholder="Username" type="text" id="username">
                        </div>
                    </div>
                    <div class="step-1" id="result-1"></div>
                    <a href="#" class="btn btn-primary step-1" onclick="checkUsername()">Continue</a>



                    <h2 class="step-2" id="welcome-user">Welcome UserNameHere!</h2>
                    <p><a href="#" onClick="step(1)" id="usernameReminder" class="step-2">Not you?</a></p>
                    <div class="form-group step-2">
                        <div class="input-group input-group-alternative mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><img data-src="/assets/icons/logo.png" style="height:100%"></span>
                            </div>
                            <input class="form-control form-control-alternative" placeholder="Password" type="password" id="password">
                            <div class="step-2" id="result-2"></div>
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
                    <div class="progress-bar bg-primary" id="loading-bar" role="progressbar" style="width: 0%;"></div>
                </div>
            </center>
        </div>
    </div>
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
        }

        function step(number) {
            $("#usernameReminder").text("Not " + $("#username").val() + "?");
            $("#welcome-user").text("Welcome " + $("#username").val() + "!");
            hideAll();
            $(".step-" + number).slideDown("slow");
            window["step_" + number]();
        }

        function step_1() {
            $("#reset-link").slideDown("slow");
        }

        function step_2() {
            $("#reset-link").slideDown("slow");
        }

        function step_3() {
            $("#reset-link").slideUp("slow");
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
            setTimeout(function() {
                window.open("/os.php?debug=true", "_self");
            }, 3500)
        }

        function step_fullscreen() {
            $("#reset-link").slideUp("slow");
        }

        function remember() {
            console.log("Remembered");
        }

        function step_reset() {
            $("#reset-link").slideUp("slow");
            alert("WIP");
            step(1);
        }


        hideAll();
        $("#reset-link").slideUp("slow");
        updateImages();

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
            $("#result-1").load("/os.php?api=true&action=checkUsername&username=" + $("#username").val());
        }

        var loginSuccess

        function login() {
            loginSuccess = false;
            $.post("/os.php", {
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
    </script>
</body>

</html>