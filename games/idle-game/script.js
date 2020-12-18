//Saves to browser storage
function save() {
    ready_to_Save = JSON.stringify(player);
    localStorage.ig = ready_to_Save;
    console.log("Saved");
}

//Returns loaded player save
function load() {
    console.log("Loaded");
    if (localStorage.ig == undefined) {
        return default_player;
    } else {
        return JSON.parse(localStorage.ig);
    }
}

//Clears session and storage save file
function clear_save() {
    player = default_player;
    localStorage.ig = JSON.stringify(default_player);
}

function update_display() {

    //Updates money numbers
    money_display.innerHTML = '<i class="fas fa-money-bill-wave"></i> ' + to_tenth(player.money_total);

    if (money_per_second_display.innerHTML != '<i class="fas fa-business-time"></i> ' + to_tenth(player.money_per_second)) {
        money_per_second_display.innerHTML = '<i class="fas fa-business-time"></i> ' + to_tenth(player.money_per_second);
    }   
    //Updates factory numbers
    if (factory_amount_display.innerHTML != '<i class="fas fa-industry"></i> ' + player.factory.amount) {
        factory_amount_display.innerHTML = '<i class="fas fa-industry"></i> ' + player.factory.amount;
    }
    if (factory_price_display.innerHTML != '<i class="fas fa-dollar-sign"></i> ' + player.factory.price) {
        factory_price_display.innerHTML = '<i class="fas fa-dollar-sign"></i> ' + player.factory.price; 
    }

    //Disables button when you can't buy any factories
    if (calc_max_factory() >= 1) {
        buy_factory_button.disabled = false;
    } else {
        buy_factory_button.disabled = true;
    }

    //Shows percent to 2 factory
    if (calc_max_factory() >= 2 || calc_missing_percent(player.money_total, calc_purchase_price(player.factory.price, 2)) == 100) {
        buy_factory_max.disabled = false;
        buy_factory_max.innerHTML = "Buy " + calc_max_factory();
        buy_factory_max.style.width = "";
    } else {
        buy_factory_max.disabled = true;
        buy_factory_max.innerHTML = calc_missing_percent(player.money_total, calc_purchase_price(player.factory.price, 2)) + "%";
        buy_factory_max.style.width = "85.16px";
    }

    //Shows percent to 1 factory
    if (calc_missing_percent(player.money_total, player.factory.price) == 100) {
        buy_factory_button.innerHTML = "Buy factory";
    } else {
        buy_factory_button.innerHTML = calc_missing_percent(player.money_total, player.factory.price) + "%";
    }
}

//Adds money to total from all sources
function calculate_money_total() {

    //Money is being added every 0.1 seconds and this counter shows how much money per second is being made
    //meaning this has to be multiplied by 10 
    player.money_per_second = (player.factory.earn * player.factory.amount + 0.1) * 10;
    player.money_per_second = to_tenth(player.money_per_second);

    player.money_total += player.factory.earn * player.factory.amount + 0.1;
    player.money_total = to_tenth(player.money_total);
}

//Start game state
var default_player = {
    money_total: 5,
    money_per_second: 1,
    factory: {
        amount: 0,
        price: 10,
        earn: 0.1,
    }
}

//Loads and defines player
var player = load();

//Money numbers
money_display = document.getElementById("money_display");
money_per_second_display = document.getElementById("money_per_second_display");

//Factory buy buttons
buy_factory_max = document.getElementById("buy_factory_max");
buy_factory_button = document.getElementById("buy_factory_button");

//Factory numbers
factory_amount_display = document.getElementById("factory_amount_display");
factory_price_display = document.getElementById("factory_price_display");

//Updates display
setInterval(function () { update_display() }, 0);

//Adds money
setInterval(function () { calculate_money_total(); }, 100);

//Saves every 10 seconds
setInterval(function () { save() }, 10000);