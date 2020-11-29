function update_inventory() {
    for (i = 1; player.inventory_slots >= i; i++) {
        document.getElementById("inv" + i).innerHTML = get_pet_picture(player.inventory[i]);
    }
}
//Finds first open slot
function find_open_slot() {
    for (i = 1; player.inventory_slots >= i; i++) {
        if (player.inventory[i] == 0 || player.inventory[i] == undefined) {
            return i;
        }
    }
}

//Makes slot red when right click and adds it to delete list
function generate_deletable_slots() {
    for (i = 1; player.inventory_slots >= i; i++) {
        document.getElementById("inv" + i).addEventListener('click', function (ev) {
            if (delete_mode == true) {
                id = parseInt(this.id.replace("inv", ""));
                if (delete_list[id] == true) {
                    this.classList.remove("deletion_select");
                    delete_list[id] = false;
                } else {
                    this.classList.add("deletion_select");
                    delete_list[id] = true;
                }
            }
        }, false);
    }
}
//Sends pet image
function get_pet_picture(item_value) {
    switch (item_value) {
        case 0:
            return '0';
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
        case 11:
            return '<i class="fas fa-kiwi-bird"></i>';
        case 12:
            return '<i class="fas fa-otter"></i>';
        case undefined:
            return "0";
        default:
            return item_value;
    }
}

//Delets pet from certain slot
function delete_pet(i) {
    player.inventory[i] = 0;
}

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

        for (i = 1; player.inventory_slots >= i; i++) {
            document.getElementById("inv" + i).classList.remove("deletion_select");
        }
    }
}
function delete_multiple() {
    if (delete_mode == true) {
        for (i = 1; player.inventory_slots >= i; i++) {
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
    for (i = 1; player.inventory_slots >= i; i++) {
        document.getElementById("inv_slots").innerHTML += `<div class="col inv-slot" id="inv${i}"></div>`
    }
}
//Adds 1 inventory slots and regenerates all of the requiered things
function add_inventory_slot() {
    player.inventory_slots += 1;
    generate_inventory();
    generate_deletable_slots();
}


generate_inventory();
generate_deletable_slots();

var delete_list = [];
var delete_mode = false;