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
    node.style.backgroundImage =
      "url('/img.php?src=" +
      node.dataset.bg_src +
      "&h=" +
      node.clientHeight +
      "&w=" +
      node.clientWidth +
      "')";
  }

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

/* Close fullscreen */
function closeFullscreen() {
  /* Get the documentElement (<html>) to display the page in fullscreen */
  var elem = document.documentElement;
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}
