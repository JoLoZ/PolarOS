<div class="windows-container">

</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-bottom" style="z-index: 999999">
    <div class="card-columns icon-grid centered" id="app-list">

    </div>

</nav>
<div class="modal fade" id="appModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="appModalTitle">What would you like to do with this app?</h5>
            </div>
            <div class="modal-body">
                <center>
                <div class="btn-group-vertical btn-block">
                    <a type="button" class="btn btn-info" href="javascript:alert('WIP')">Visit the store page</a>
                    <a type="button" class="btn btn-warning" href="javascript:alert('WIP')">Change permissions</a>
                    <a type="button" class="btn btn-danger" href="javascript:closeWindow(activeWindow)">Close it</a>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Nothing</button>
                </center>
            </div>
        </div>
    </div>
</div>
<script>
    function createWindow(url, name, icon) {
        $(".windows-container").append(`<div class="window" id="window-` + name + `"></div>`);
        $("#app-list").append(`<a class="card bg-transparent icon" href="javascript:focusWindow('` + name + `')" id="window-icon-` + name + `"><div class="icon" data-bg_src="` + icon + `"></div></a>`)
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
        } else {
            if (activeWindow != "home") {
                $("#appModal").modal('show');
            }
        }
    }

    function closeWindow(id) {
        $("#appModal").modal('hide');
        focusWindow("home");
        $("#window-icon-" + id).hide("slow");
        setTimeout(function() {
            $("#window-" + id).remove();
            $("#window-icon-" + id).remove();
        }, 700);
    }
</script>