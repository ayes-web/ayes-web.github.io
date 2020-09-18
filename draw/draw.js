var canvas = document.getElementById("drawing_canvas");
var ctx = canvas.getContext('2d');

var range = document.getElementById("range");
var input = document.getElementById("input");
var color = document.getElementById("color");
var brush = document.getElementById("brush");
var eraser = document.getElementById("eraser");
var pixel_button = document.getElementById("pixel_button");

var brush_size = 30;
var current_tool = "brush";
var holding_down = false;
var mouse_pos;
var brush_type = "round";
var block_location = [];
var draw_type = "normal"
var rainbow_grid_mode = false;
var eraser_color = "#FFFFFF"

window.addEventListener('load', ()=>{
    window_resize();
    grid_build();

    document.addEventListener('mousedown', start_draw);
    document.addEventListener('mouseup', stop_draw);
    document.addEventListener('mousemove', event => {
        getPosition(event);
        if (draw_type == "pixel") {
            while_draw_pixel();
        } else {
            while_draw();
        }
    });
    document.addEventListener('click', event => {
        getPosition(event);
        if (draw_type == "pixel") {
            click_draw_pixel();
        } else {
            //click_draw();
        }
    });
});
function pixel_mode() {
    if (draw_type == "normal") {
        draw_type = "pixel";
    } else {
        draw_type = "normal";
    }
    pixel_button.classList.toggle("selected")
}
function getPosition(event){ 
    mouse_pos = ({
        x: event.clientX - canvas.offsetLeft,
        y: event.clientY - canvas.offsetTop,
    });
}
function tool_value(tool) {
    var thing;
    if (tool == "eraser") {
        thing = eraser_color; 
    } else {
        thing = color.value; 
    }
    return thing;
}
function start_draw() {
    holding_down = true;
    getPosition(event);
}
function stop_draw() {
    holding_down = false;
}
function while_draw() {
    if (!holding_down) return;
    ctx.beginPath(); 
    ctx.lineWidth = brush_size; 
    ctx.lineCap = brush_type; 
    ctx.strokeStyle = tool_value(current_tool);
    ctx.moveTo(mouse_pos.x, mouse_pos.y); 
    getPosition(event); 
    ctx.lineTo(mouse_pos.x , mouse_pos.y); 
    ctx.stroke(); 
}
function click_draw() {
    ctx.strokeStyle = tool_value(current_tool);
    ctx.beginPath();
    ctx.arc(mouse_pos.x, mouse_pos.y, brush_size, 0, 2 * Math.PI);
    ctx.fill();
};
function while_draw_pixel() {
    if (!holding_down) return;
    block_location.forEach(ele => {
        if (mouse_pos.y > ele.y && mouse_pos.y < ele.y + brush_size && mouse_pos.x > ele.x && mouse_pos.x < ele.x + brush_size) {
            ctx.fillStyle = tool_value(current_tool);
            ctx.fillRect(ele.x, ele.y, brush_size, brush_size);
        }
    });
};
function click_draw_pixel() {
    block_location.forEach(ele => {
        if (mouse_pos.y > ele.y && mouse_pos.y < ele.y + brush_size && mouse_pos.x > ele.x && mouse_pos.x < ele.x + brush_size) {
            ctx.fillStyle = tool_value(current_tool);
            ctx.fillRect(ele.x, ele.y, brush_size, brush_size);
        }
    });
};
range.oninput = function(){
    grid_build();
    brush_size = parseInt(range.value);
    input.value = parseInt(range.value);
};
input.oninput = function(){
    grid_build();
    if (input.value >= 101) {
        brush_size = 100;
        range.value = 100;
        input.value = 100;
    } else {
        brush_size = parseInt(input.value);
        range.value = parseInt(input.value);
    }
};
function randomColor() {
    var t = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    return t;
}
function grid_build() {
    block_location = [];
    var x = 0;
    var y = 0;
    while (true) {
        if (x < innerWidth) {
            block_location.push({
                x: x,
                y: y,
                brush_size: brush_size,
                radius: 0,
            })
            x += brush_size;
        } else if (y > innerHeight) {
            break;
        } else {
            x = 0;
            y += brush_size;
        }
        if (rainbow_grid_mode == true) {
            ctx.fillStyle = randomColor();
            ctx.fillRect(x, y, brush_size, brush_size);
        }
    }
}
function window_resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
function select_tool(tool) {
    switch(tool) {
        case "brush": 
            current_tool = "brush"
            brush.classList.add("selected");
            eraser.classList.remove("selected");
            break;
        case "eraser":
            current_tool = "eraser"
            eraser.classList.add("selected");
            brush.classList.remove("selected");
            break;
        default:
            console.log("nothing selected")
    }
}