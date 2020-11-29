//Function for buying any amount of factories
function buy_factory(amount) {
    if (calc_purchase_price(player.factory.price, amount) <= player.money_total) {
        player.money_total -= calc_purchase_price(player.factory.price, amount);
        for (i = 0; i < amount; i++) {
            player.factory.price += player.factory.price / 10;
            player.factory.price = to_tenth(player.factory.price);
            player.factory.amount++;
        }
    }
}

//Function for buying as much as you can afford
function buy_max_factory() {
    for (player.factory.amount; player.money_total >= player.factory.price; player.factory.amount++, player.money_per_second += player.factory.earn) {
        player.money_total -= player.factory.price;
        player.factory.price += player.factory.price / 10;
        player.factory.price = to_tenth(player.factory.price);
    }
}

//Calculates future price
function calc_future_price(current_price, purchase_amount) {
    price = current_price;
    amount = purchase_amount;
    for (i = 0; i < amount; i++) {
        price += price / 10;
        price = to_tenth(price);
    }
    return price;
}

//Calculates how much it would take to buy
function calc_purchase_price(current_price, purchase_amount) {
    price = 0;
    for (i = 0; i < purchase_amount; i++) {
        price += current_price;
        current_price += current_price / 10;
        current_price = to_tenth(current_price);
    }
    return price;
}

//Calculates how many you could buy with current money
function calc_max_factory() {
    money = player.money_total;
    price = player.factory.price;
    for (i = 0; money >= price; i++) {
        money -= price;
        price += price / 10;
        price = to_tenth(price);
    }
    return i;
}