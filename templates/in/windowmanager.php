<div class="windows-container">

</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-bottom" style="z-index: 999999">
    <div class="card-columns icon-grid centered" id="app-list">

    </div>

</nav>
<script>
    function createWindow(url, name, icon) {
        $(".windows-container").append(`<div class="window" id="window-` + name + `"></div>`);
        $("#app-list").append(`<a class="card bg-transparent icon" oncontextmenu="closeWindow(` + name + `)" href="#" id="window-icon-` + name + `" onclick="focusWindow('` + name + `')"><div class="icon" data-bg_src="` + icon + `"></div></a>`)
        updateImages(true);
        $("#window-" + name).load(url);
        focusWindow(name);
    }

    var activeWindow;

    function focusWindow(id) {
        if (activeWindow != id) {
            $(".window").slideUp("slow");
            $("#window-" + id).slideDown("slow");
            activeWindow = id;
        }else{
            $("#window-" + id).dropdown()
        }
    }

    function closeWindow(id) {
        focusWindow("home");
        $("#window-icon-" + id).hide("slow");
        setTimeout(function() {
                $("#window-" + id).remove();
                $("#window-icon-" + id).remove();
        }, 700);
    }
</script>