//Saves to browser storage
function save() {
    ready_to_Save = JSON.stringify(player);
    localStorage.dp = ready_to_Save;
    console.log("Saved");
}

//Returns loaded player save
function load() {
    console.log("Loaded");
    if (localStorage.dp == undefined) {
        return default_player;
    } else {
        return JSON.parse(localStorage.dp);
    }
}

//Clears session and storage save file
function clear_save() {
    player = default_player;
    localStorage.gm = JSON.stringify(default_player);
    save()
}

function update_display() {
    if (player.printer.amount == undefined || player.printer.price == undefined) {
        player.printer = default_player.printer
    }
    if (player.printer2.amount == undefined || player.printer2.price == undefined) {
        player.printer2 = default_player.printer2
    }

    document.getElementById("material").innerHTML = "<div class='important-number'> Material: " + formatNum(player.material) + "</div>"
    document.getElementById("printer").innerHTML = "Amount: " + formatNum(player.printer.amount)
    document.getElementById("printerp").innerHTML = "Make <b>Basic printer</b> with <b>" + formatNum(player.printer.price) + "</b> material"

    document.getElementById("printer2").innerHTML = "Amount: " + formatNum(player.printer2.amount)
    document.getElementById("printerp2").innerHTML = "Make <b>Advanced printer</b> with <b>" + formatNum(player.printer2.price) + "</b> material"

    document.getElementById("printer3").innerHTML = "Amount: " + formatNum(player.printer3.amount)
    document.getElementById("printerp3").innerHTML = "Make <b>Printer factory</b> with <b>" + formatNum(player.printer3.price) + "</b> material"

    if (player.material >= 222 || player.printer2.amount > 0) {
        document.getElementById("print2").hidden = false
    } else {
        document.getElementById("print2").hidden = true
    }
    if (player.material >= 2222 || player.printer3.amount > 0) {
        document.getElementById("print3").hidden = false
    } else {
        document.getElementById("print3").hidden = true
    }

    if (player.material < player.printer.price) {
        document.getElementById("printerp").classList.remove("btn-primary")
        document.getElementById("printerp").classList.add("btn-secondary")
    } else {
        document.getElementById("printerp").classList.add("btn-primary")
        document.getElementById("printerp").classList.remove("btn-secondary")
    }

    if (player.material < player.printer2.price) {
        document.getElementById("printerp2").classList.remove("btn-primary")
        document.getElementById("printerp2").classList.add("btn-secondary")
    } else {
        document.getElementById("printerp2").classList.add("btn-primary")
        document.getElementById("printerp2").classList.remove("btn-secondary")
    }

    if (player.material < player.printer3.price) {
        document.getElementById("printerp3").classList.remove("btn-primary")
        document.getElementById("printerp3").classList.add("btn-secondary")
    } else {
        document.getElementById("printerp3").classList.add("btn-primary")
        document.getElementById("printerp3").classList.remove("btn-secondary")
    }
}

function update_numbers() {
    player.material += player.printer.amount / 10
    player.material = to_tenth(player.material)

    player.printer2.p2 += player.printer2.amount / 10
    while (player.printer2.p2 >= 10) {
        player.printer2.p2 -= 10
        player.printer.amount++
    }

    player.printer3.p3 += player.printer3.amount / 10
    while (player.printer3.p3 >= 10) {
        player.printer3.p3 -= 10
        player.printer2.amount++
    }
}

//Start game state
var default_player = {
    material: 5,
    printer: {
        amount: 0,
        price: 5,
        mult: 5,
        mult_mult: 2,
    },
    printer2: {
        amount: 0,
        price: 1000,
        mult: 10,
        mult_mult: 3,
        p2: 0
    },
    printer3: {
        amount: 0,
        price: 10000,
        mult: 15,
        mult_mult: 4,
        p3: 0
    }
}

//Loads and defines player
var player = load();

//Updates display
setInterval(function () { update_display() }, 0);

//Updates display
setInterval(function () { update_numbers() }, 100);

//Saves every 10 seconds
setInterval(function () { save() }, 10000);

window.addEventListener("beforeunload", function (event) {
    save()
});
