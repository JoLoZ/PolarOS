<style>
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

    .contatiner {
        height: 100%;
        padding: 0px;
        margin: 0px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>
<div id="home-screen">
    <nav class="navbar navbar-dark bg-primary fixed-top" style="padding: 0px; margin: 0px; height: 5rem">
        <div class="centered">
            <div class="card-columns icon-menu">
                <a class="card bg-transparent icon" title="Notifications" href="javascript:app(`notifications`, `/assets/img/icons/logo.png`)">
                    <div class="icon" data-bg_src="/assets/img/icons/logo.png"></div>
                </a>
                <a class="card bg-transparent icon" title="Settings" href="javascript:app(`settings`, `/assets/img/icons/logo.png`)">
                    <div class="icon" data-bg_src="/assets/img/icons/apps/settings.png"></div>
                </a>
                <a class="card bg-transparent icon" title="Log out" href="/?action=logout">
                    <div class="icon" data-bg_src="/assets/img/icons/logo.png"></div>
                </a>
                <a class="card bg-transparent icon" title="Log out" href="#" onclick="window.open('/?action=logout', '_self')">
                    <div class="icon" data-bg_src="/assets/img/icons/logo.png"></div>
                </a>
                <a class="card bg-transparent icon" title="Log out" href="#" onclick="window.open('/?action=logout', '_self')">
                    <div class="icon" data-bg_src="/assets/img/icons/logo.png"></div>
                </a>
            </div>
        </div>
    </nav>
    <div class="contatiner home-container" data-auto_bg="wallpaper">
        <div class="card-columns icon-grid centered">
            <?php
            $icons = 0;
            while ($icons < 5 * 8) {
                echo '<a class="card bg-transparent icon" title="A dark room" href="javascript:app(`demo_adr`, `/app/demo_adr/icon.png`)"><div class="icon" data-bg_src="/app/demo_adr/icon.png"></div></a>';
                $icons = $icons + 1;
            }
            ?>
        </div>
    </div>
</div>


<script>
    updateImages();

    function app(id, icon) {
        createWindow("/?run=" + id, id, icon);
    }
</script>