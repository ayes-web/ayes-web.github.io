//Saves to browser storage
function save() {
    ready_to_save = JSON.stringify(player);
    localStorage.gm = ready_to_save;
    console.log("Saved");
}

//Loads from browser storage
function load() {
    console.log("Loaded");
    if (localStorage.gm == undefined) {
        return default_player;
    } else {
        return JSON.parse(localStorage.gm);
    }
}

//Clears current session & storage save
function clear_save() {
    player = default_player;
    ready_to_save = JSON.stringify(default_player);
    localStorage.gm = ready_to_save;
    console.log("Cleared save!");
    generate_inventory();
    update_display();
    document.getElementById("buy_inv").innerHTML = `Inventory slot $${player.inventory.price}`
}

//Updates all the numbers on display
function update_display() {

    if (money_display.innerHTML != '<i class="fas fa-money-bill-wave"></i> ' + Math.round(10 * player.money_total) / 10) {
        money_display.innerHTML = '<i class="fas fa-money-bill-wave"></i> ' + Math.round(10 * player.money_total) / 10;
    }
    if (money_per_second_display.innerHTML != '<i class="fas fa-business-time"></i> ' + Math.round(10 * player.money_per_second) / 10) {
        money_per_second_display.innerHTML = '<i class="fas fa-business-time"></i> ' + Math.round(10 * player.money_per_second) / 10;
    }
    
    update_inventory();
}

//Calculates money per second
function calculate_money_per_second() {
    let money_per_second = 0;
    for (i = 0; player.inventory.slots >= i; i++) {
        if (player.inventory.items[i] >= eggs.normal.id_start && player.inventory.items[i] <= eggs.normal.id_end) {
            money_per_second += eggs.normal.money_per_second;
        } else if (player.inventory.items[i] >= eggs.normal2.id_start && player.inventory.items[i] <= eggs.normal2.id_end) {
            money_per_second += eggs.normal2.money_per_second;
        }
    }
    player.money_per_second = money_per_second;
    player.money_per_second = Math.round(10 * player.money_per_second) / 10;
}

//Rounds number to the tenth
function to_tenth(number) {
    return Math.round(10 * number) / 10
}

//Start game state
var default_player = {
    money_total: 10,
    money_per_second: 0,
    inventory: {
        items: [],
        slots: 12,
        price: 1000
    }
}

//random number in range
function random_number(min, max) {
    return Math.random() * (max - min) + min;
}

//Defines player & loads data
var player = load();

//Money number elements
money_display = document.getElementById("money_display");
money_per_second_display = document.getElementById("money_per_second_display");

//Adds money and changes display
setInterval(function () { update_display() }, 1);

//Saves every 10 seconds
setInterval(function () { save() }, 10000);

//Adds money and changes display
setInterval(function () {
    calculate_money_per_second();

    player.money_total += player.money_per_second;
    player.money_total = Math.round(10 * player.money_total) / 10;

}, 100);