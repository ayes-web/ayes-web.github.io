var eggs = {
    normal: {
        price: 10,
        id_start: 1,
        id_end: 10,
        money_per_second: 0.1,
    },
    normal2: {
        price: 100,
        id_start: 11,
        id_end: 21,
        money_per_second: 1,
    }
}
function buy_egg(egg_type) {
    if (find_open_slot() != undefined) {
        if (egg_type == "normal" && player.money_total >= eggs.normal.price) {
            pet = Math.floor(random_number(eggs.normal.id_start, eggs.normal.id_end));

            player.money_total -= eggs.normal.price;
            player.inventory.items[find_open_slot()] = pet;
        }
        if (egg_type == "normal2" && player.money_total >= eggs.normal2.price) {

            pet = Math.floor(random_number(eggs.normal2.id_start, eggs.normal2.id_end));

            player.money_total -= eggs.normal2.price;
            player.inventory.items[find_open_slot()] = pet;
        }
    }
}