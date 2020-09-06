values = [
["https://lewd.se/","90 day temporary file hosting."],
["https://s-ul.eu/","Free file hosting with 1 free subdomain."],
["https://privacytools.io/","Useful list of privacy tools."],
["https://vgy.me/","Free image hosting."],
["https://mullvad.net/","Recommended VPN service."],
["https://matomo.org/","Google Analytics alternative."],
["https://froggi.es/mario/","Super Mario 64 on the Web!"],
["https://noclip.website/","Explore many games on the web."],
["https://spyware.neocities.org/index.html","Gives indepth ratings on spyware level of programs."],
["https://web.obarun.org/","Arch Linux based system without systemd."],
["http://www.bash.org/","Quore Databse."],
["http://unicodeemoticons.com/","15000 Unicode symbols for emoticons from different languages and scripts."],
["https://godotengine.org/"," Free and open source 2D and 3D game engine."],
["https://stumblingon.com/","Shows you a random webpage whenever you click the STUMBLE button."],
["https://www.raylib.com/","raylib is a simple and easy-to-use library used to make games. Supports many languages and platforms."],
["https://copy.sh/v86/","Run multiple os in your browser."],
["https://www.pfsense.org/","Open Source Firewall."],
["https://myspotify.pw/","Spotify stats."],
["https://suckless.org/","Home of dwm, dmenu and other quality software."],
["https://securitycheckli.st/","List of privacy tools. In my opinion has bad choices check out <a href='https://privacytools.io/'>privacytools.io</a> instead."],
["https://authpass.app/","Open source keepass client for mobile."],
["https://opensource.builders/","Helps find open-source alternatives for your favorite apps."],
["https://prism-break.org/","Good list of privacy tools."],
["https://mailbox.org/en/","Paid email service with option for domain aliases."],
["https://github.com/Hextris/Hextris","Fun open source game inspired by tetris."],
["https://www.freedombox.org/","Personal server for locally hosting."],
["https://yunohost.org/","Better personal server for locally hosting."],
["https://librespeed.org/","Open Source Speedtest."],
["https://switching.software/","Privacy friendly alternatives to software."],
["https://lbry.tv/","Alternative to <a href='https://youtube.com/'>youtube</a>."],
["https://www.projecthoneypot.org/","Stops spammers."],
["https://favicon.io/","Favicon generator."],
["https://www.neoaxis.com/","Open source game engine."],
["https://twobithistory.org/","Blog about computer history intended primarily for computer people."],
["https://dev.lemmy.ml/","Open source federated alternative to <a href='https://www.reddit.com/'>Reddit</a>."],
["https://knockout.chat/","Cool forum."],
["http://www.plane9.com/","Music visualizer and sound responsive screensaver. Most likely abandoned by the dev."],
["https://15.ai/","Natural text-to-speech synthesis. Can do game character voices like glados from Portal"],
["https://beam.cafe/","File sharing service."],
["https://mhitza.github.io/","Interesting posts on tech."],
["https://carrd.co/","More limited version of <a href='https://neocities.org/'>Neocities</a>"],
["https://shapez.io/","Open source <a href='https://factorio.com/'>Factorio</a> like game."],
];
var empty = "﻿";
var animation = ["Web sites","Web site","Web sit","Web si","Web s","Web ","We","W",empty,"W","We","Web","Web s","Web si","Web sit","Web site","Web sites"];
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
    div.innerHTML = "<img height='25' width='25' src='https://i.olsh.me/icon?size=25&url=" + values[i][0] + "'>" + values[i][1];
    document.getElementById("list").appendChild(div);
    document.getElementById(i).appendChild(entry);
    x += values[i];
  }
}
window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    duration: 1000 // milliseconds
  });
}
l = 0;
setInterval(function(){
    if (l >= animation.length) {
      l = 0;
    }
    document.title = animation[l];
    l += 1;
  }, 500);
