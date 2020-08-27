var btn = document.getElementById("switch");

btn.onclick = function() {
   var element = document.body;
   var element2 = document.getElementById("list");
   var element3 = document.getElementById("url");
   var element4 = document.getElementById("about");
   var element5 = document.getElementById("linkname");

   element.classList.toggle("dark-mode");
   element2.classList.toggle("dark-mode2");
   element3.classList.toggle("dark-mode2");
   element4.classList.toggle("dark-mode2");
   element5.classList.toggle("dark-mode2");
}