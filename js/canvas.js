function randomColor() {
    var t = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    return t;
}
function canvasSize() {
    var canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

async function BlocksIn() {
    var x = 0;
    var y = 0;
    var size = 50;
    var opposite_x = x;
    var opposite_y = y;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";

    while (true) {
        ctx.fillStyle = "#000000";
        if (x < innerWidth) {
            ctx.fillRect(x, y, size, size);
            x += size;
        } else if (y > innerHeight) {
            opposite_x = x;
            opposite_y = y;
            break;
        } else {
            x = 0;
            y += size;
            ctx.fillRect(x, y, size, size);
        }
        ctx.fillRect(x, y, size, size);
        await new Promise(r => setTimeout(r, 5));
    }
}
async function BlocksOut() {
    var x = 0;
    var y = 0;
    var size = 50;
    var opposite_x = x;
    var opposite_y = y;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";

    while (true) {
        ctx.fillStyle = "#00FF00";
        if (opposite_x > 0 && opposite_y >= 0) 
        {
            ctx.fillRect(opposite_x, opposite_y, size, size);
            opposite_x -= size;
        } 
        else if (opposite_y <= 0) 
        {
            break;
        } 
        else if (opposite_x <= 0) 
        {
            opposite_x = innerWidth;
            opposite_y -= size;
            ctx.fillRect(opposite_x, opposite_y, size, size);
        }
        await new Promise(r => setTimeout(r, 5));
    }
}
async function repeat() {
    while (true) {
        var x = 0;
        var y = 0;
        var size = 50;
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var opposite_x = x;
        var opposite_y = y;

        console.log("starting blocks in")
        ctx.fillStyle = randomColor();
        while (true) {
            if (x < innerWidth) {
                ctx.fillRect(x, y, size, size);
                x += size;
            } else if (y > innerHeight) {
                opposite_x = x;
                opposite_y = y;
                break;
            } else {
                x = 0;
                y += size;
                ctx.fillRect(x, y, size, size);
            }
            await new Promise(r => setTimeout(r, 5));
        }

        ctx.fillStyle = randomColor();
        console.log("starting blocks out")
        while (true) {
            if (opposite_x > 0 && opposite_y >= 0) 
            {
                ctx.fillRect(opposite_x, opposite_y, size, size);
                opposite_x -= size;
            } 
            else if (opposite_y <= 0) 
            {
                break;
            } 
            else if (opposite_x <= 0)
            {
                opposite_x = innerWidth;
                opposite_y -= size;
                ctx.fillRect(opposite_x, opposite_y, size, size);
            }
            await new Promise(r => setTimeout(r, 5));
        }
    }
}
async function go() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var size = 40;

    var x = 0;
    var y = 0;
    var thing_x = 0;
    var thing_y = 0;
    
    while (true) {
        ctx.fillStyle = randomColor();
        x = thing_x;
        y = thing_y;
        if (thing_y >= innerHeight && thing_x >= innerWidth) {
            console.log("done");
            break;
        }
        while (true) {
            if (x < innerWidth) {
                ctx.fillRect(x, y, size, size);
                x += size;
            } else if (y > innerHeight) {
                thing_x += size;
                thing_y += size;
                break;
            } else {
                x = thing_x;
                y += size;
                ctx.fillRect(x, y, size, size);
            }
            await new Promise(r => setTimeout(r, 1));
        }
    }
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}