values = [
["https://froggi.es/mario/","Super Mario 64 on the Web!"],
["https://stumblingon.com/","Shows you a random webpage whenever you click the STUMBLE button."],
["https://copy.sh/v86/","Run multiple os in your browser."],
["https://myspotify.pw/","Spotify stats."],
["https://mailbox.org/en/","Paid email service with option for domain aliases."],
["https://yunohost.org/","Easy to use self hosting OS"],
["https://www.projecthoneypot.org/","Stops spammers."],
["https://twobithistory.org/","Blog about computer history intended primarily for computer people."],
["http://www.plane9.com/","Music visualizer and sound responsive screensaver. Most likely abandoned by the dev."],
["https://15.ai/","Natural text-to-speech synthesis. Can do game character voices like glados from Portal"],
["https://mhitza.github.io/","Interesting posts on tech."],
["https://shapez.io/","Open source Factorio like game."],
["https://mullvad.net/","Good VPN service."],
];
function listLoad() {
    x = 0;
    for (i = 0; i < values.length; i++) {


    if (values[i][0].startsWith("https://") === true)
    {
      var PREFIX = "https://";
      if (values[i][0].indexOf(PREFIX) === 0) {
      linkClean = values[i][0].slice(PREFIX.length);
      }
    }
    else if (values[i][0].startsWith("http://") === true)
    {
      PREFIX = "http://";
      if (values[i][0].indexOf(PREFIX) === 0) {
      linkClean = values[i][0].slice(PREFIX.length);
      }
    }
    var the_arr = linkClean.split('/');
    the_arr.pop();
    linkClean = the_arr.join('/');
    var div = document.createElement("div");
    var entry = document.createElement("a");
    entry.innerHTML = linkClean;
    entry.href = values[i][0];
    entry.className = "url";
    entry.target = "_blank";
    div.className = "entry";
    div.id = i;
    div.innerHTML = "<img rel='noreferrer' alt='" + linkClean + "' class='no-select' height='32' width='32' src='https://i.olsh.me/icon?size=32&url=" + linkClean + "'>" + values[i][1];
    document.getElementById("list").appendChild(div);
    document.getElementById(i).appendChild(entry);
    x += values[i];
  }
}
window.onload = function() {
  listLoad()
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    duration: 1000 // milliseconds
  });
}