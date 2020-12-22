const switch_time = 500;
var x = 0;
var y = 0;

setInterval(function () {
    x ++
    y ++
    document.body.style.backgroundPositionX = `${x}px`;
    document.body.style.backgroundPositionY = `${y}px`;
}, 30);