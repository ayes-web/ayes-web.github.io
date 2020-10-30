var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var progressBar = document.getElementById("progressBar");

    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        window.location.replace("/");
      } else {
        width += 0.05;
        progressBar.style.width = width + "%";

        progressBar.innerHTML = Math.floor(width) + "%";
      }
    }
  }
}