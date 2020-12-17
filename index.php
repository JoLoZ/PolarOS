<head>
    <title>BoxOS</title>
</head>

<body style="paddign: 0px; margin: 0px">
    <iframe id="all" style="height:100%; width: 100%; border: 0px; margin: 0px; padding: 0px;" allowfullscreen src="/os.php"></iframe>
    <script>
focus();
var listener = window.addEventListener('blur', function() {
    if (document.activeElement === document.getElementById('iframe')) {
        openFullscreen();
    }
    window.removeEventListener('blur', listener);
});


        /* View in fullscreen */
        function openFullscreen() {
            /* Get the documentElement (<html>) to display the page in fullscreen */
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                /* IE11 */
                elem.msRequestFullscreen();
            }
        }
    </script>
</body>