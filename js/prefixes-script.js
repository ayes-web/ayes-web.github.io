values = [
"/",
"1 third of a triforce rotated 270 degrees",
"1 third of a triforce rotated 90 degrees",
"1 third triforce",
"1/3 sideways triforce",
"1/3 triforce",
"1/3 triforce rotated clockwise 90 degrees",
"4chan bullet point",
"4chan indent",
">",
"one third of a triforce flipped along the horizontal axis and then rotated counter-clockwise 90 degrees",
"?",
"^ rotated counter clockwise 270 degrees",
"^ rotated counter-clockwise 270 degrees",
"^ rotated counterclockwise 270 degrees",
"a blown over tent",
"a third of a triforce",
"comedy angle",
"comedy chevron",
"comedy dorito",
"funny angle",
"funny corner",
"funny dorito",
"funny triangle",
"go go gadget",
"greentext",
"hey siri",
"meme angle",
"meme corner",
"meme dorito",
"meme triangle",
"meme arrow",
"mirrored <",
"mountain that got blown over",
"ok google",
"one third of a triforce flipped along the horizontal axis and then rotated 270 degrees",
"portrait ^",
"portrait mode v",
"portrait mountain",
"portrait v",
"rotated <",
"rotated ^",
"rotated v",
"sideways ^",
"sideways mountain",
"sideways v",
"sv_",
"tent that got blown over",
"v rotated 270 degrees",
"v rotated 90 degrees",
"v rotated clockwise 270 degrees"
];
function Copy(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Copied the prefix'
    })
}
function listload() {
    document.getElementById("title").style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
    document.getElementById("date").innerHTML = "Last edited " + moment([2020,6,16,17]).fromNow();
    x = 0;
    for (i = 0; i < values.length; i++) {
    var link = document.createElement("div");
    link.innerHTML = values[i];
    link.className = "link noselect";
    link.id = i;
    link.onclick = function(){Copy(this.id)};
    document.getElementById("list").appendChild(link);
    x += values[i];
  }
}