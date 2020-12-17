document.querySelectorAll('*').forEach(function(node) {
    if(node.hasAttribute("data-src")){
        node.src = "/img.php?src=" + node.dataset.src + "&h=" + node.clientHeight + "&w=" + node.clientWidth;
    }
    if(node.hasAttribute("data-bg_src")){
        node.style.backgroundImage = "url('/img.php?src=" + node.dataset.bg_src + "&h=" + node.clientHeight + "&w=" + node.clientWidth + "')";
    }

    if(node.hasAttribute("data-auto_bg")){
        node.style.backgroundImage = "url('https://source.unsplash.com/" + node.clientWidth + "x" + node.clientHeight + "/?" + node.dataset.auto_bg + "')";
    }
});