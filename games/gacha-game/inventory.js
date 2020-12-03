//Updates inventory
function update_inventory() {
    for (i = 1; player.inventory.slots >= i; i++) {
        if (document.getElementById(`inv${i}`) == null) {
            document.getElementById("inv_slots").innerHTML += `<div onclick="click_deletable(this)" type="button" class="col-2 inv-slot" id="inv${i}"></div>`
        }
    }
    for (i = 1; player.inventory.slots >= i; i++) {
        document.getElementById(`inv${i}`).innerHTML = get_pet_picture(player.inventory.items[i]);
    }
}

//Finds first open slot
function find_open_slot() {
    for (i = 1; player.inventory.slots >= i; i++) {
        if (player.inventory.items[i] == 0 || player.inventory.items[i] == undefined) {
            return i;
        }
    }
}

//Function for buying and adding pet slot
function buy_pet_slot() {
    if (player.money_total >= player.inventory.price) {
        player.money_total -= player.inventory.price;
        player.inventory.price *= 1.5;
        player.inventory.price = to_tenth(player.inventory.price)
        document.getElementById("buy_inv").innerHTML = `Inventory slot $${player.inventory.price}`
        add_inventory_slot();
    }
}

//Function for selecting slot for deletion
function click_deletable(slot) {
    id = parseInt(slot.id.replace("inv", ""));
    if (player.inventory.items[id] != undefined && player.inventory.items[id] != 0 && delete_mode == true) {
        if (delete_list[id] == true) {
            slot.classList.remove("deletion_select");
            delete_list[id] = false;
        } else {
            slot.classList.add("deletion_select");
            delete_list[id] = true;
        }
    }
}

//Sends pet image
function get_pet_picture(item_value) {
    switch (item_value) {
        case 0:
            return "X";
        case 1:
            return '<i class="fas fa-dragon"></i>';
        case 2:
            return '<i class="fas fa-cat"></i>';
        case 3:
            return '<i class="fas fa-crow"></i>';
        case 4:
            return '<i class="fas fa-dog"></i>';
        case 5:
            return '<i class="fas fa-dove"></i>';
        case 6:
            return '<i class="fas fa-spider"></i>';
        case 7:
            return '<i class="fas fa-fish"></i>';
        case 8:
            return '<i class="fas fa-frog"></i>';
        case 9:
            return '<i class="fas fa-hippo"></i>';
        case 10:
            return '<i class="fas fa-horse"></i>';
        case undefined:
            return "X";
        default:
            return item_value;
    }
}

//Delets pet from certain slot
function delete_pet(i) {
    player.inventory.items[i] = 0;
}

//toggles deletion mode
function delete_switch() {
    delete_list = [];

    if (delete_mode == false) {
        delete_mode = true;
        document.getElementById("inv_slots").style.cursor = "pointer";
        document.getElementById("trash1").classList.add("deletion_select");
        document.getElementById("trash2").hidden = false
    } else {
        delete_mode = false;
        document.getElementById("inv_slots").style.cursor = "";
        document.getElementById("trash1").classList.remove("deletion_select");
        document.getElementById("trash2").hidden = true

        //de-selects all slots
        for (i = 1; player.inventory.slots >= i; i++) {
            document.getElementById("inv" + i).classList.remove("deletion_select");
        }
    }
}

function delete_multiple() {
    if (delete_mode == true) {
        for (i = 1; player.inventory.slots >= i; i++) {
            //If object is marked to be deleted aka true it will trigger and delete it
            if (delete_list[i] == true) {
                delete_pet(i);
            }
        }
        delete_switch();
    }
}

//Regenerates the inventory HTML part so it doesnt bug
function generate_inventory() {
    document.getElementById("inv_slots").innerHTML = "";
    update_inventory()
}
//Adds 1 inventory slots and regenerates all of the requiered things
function add_inventory_slot() {
    player.inventory.slots += 1;
    generate_inventory();
}


generate_inventory();
document.getElementById("buy_inv").innerHTML = `Inventory slot $${player.inventory.price}`

var delete_list = [];
var delete_mode = false;