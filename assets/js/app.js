function updateImages(noAutoBG) {
  document.querySelectorAll("*").forEach(function (node) {
    if (node.hasAttribute("data-src")) {
      node.src =
        "/img.php?src=" +
        node.dataset.src +
        "&h=" +
        node.clientHeight +
        "&w=" +
        node.clientWidth;
    }
    if (node.hasAttribute("data-bg_src")) {
      if (node.clientHeight < node.clientWidth) {
        node.style.backgroundImage =
          "url('/img.php?src=" +
          node.dataset.bg_src +
          "&w=" +
          node.clientWidth +
          "')";
      } else {
        node.style.backgroundImage =
          "url('/img.php?src=" +
          node.dataset.bg_src +
          "&h=" +
          node.clientHeight +
          "')";
      }
    }

    if (noAutoBG) {

    }else{
      if (node.hasAttribute("data-auto_bg")) {
        node.style.backgroundImage =
          "url('https://source.unsplash.com/" +
          node.clientWidth +
          "x" +
          node.clientHeight +
          "/?" +
          node.dataset.auto_bg +
          "')";
      }
    }
  });
}

var loadingBarAnimation = 0;
function update_loading_bar() {
  $("#loading-bar-" + loadingBarAnimation).hide();
  $("#loading-bar-118").hide();
  loadingBarAnimation = loadingBarAnimation + 1;
  $("#loading-bar-" + loadingBarAnimation).show();
  if (loadingBarAnimation == 118) {
    loadingBarAnimation = 0;
  }
}

var loadingBarAnimationTimer = setInterval(update_loading_bar, 50);
