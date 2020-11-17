const switch_time = 500;
var index2 = 0;
var index = 1
var x = 0;
var y = 0;

setInterval(function () {
    if (index2 >= switch_time) {
        index = Math.floor(Math.random() * (1 - 8) + 8);
        index2 = 0;
    }
    index2 += 1;
    switch (index) {
        case 1:
            x += 1;
            y += 1;
            break;
        case 2:
            x -= 1;
            y -= 1;
            break;
        case 3:
            x += 1;
            y -= 1;
            break;
        case 4:
            x -= 1;
            y += 1;
            break;
        case 5:
            x += 1;
            y += 0;
            break;
        case 6:
            x += 0;
            y += 1;
            break;
        case 7:
            x += 0;
            y -= 1;
            break;
        case 8:
            x -= 1;
            y += 0;
            break;
        default:
        // code block
    }
    document.body.style.backgroundPositionX = `${x}px`;
    document.body.style.backgroundPositionY = `${y}px`;
}, 30);