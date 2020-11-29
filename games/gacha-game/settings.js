main_menu = document.getElementById("main_menu");
settings_menu = document.getElementById("settings_menu");

/*
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function switch_pages() {
    move_amount = 5;
    if (settings_menu.style.left == "0px") {
        let settings_cords = 0
        let main_cords = -1000
        while(settings_menu.style.left != "-1000px" && main_menu.style.left != "0px") {
            settings_menu.style.left = `${settings_cords}px`;
            main_menu.style.left = `${main_cords}px`;

            settings_cords -= move_amount;
            main_cords += move_amount;
            await sleep(1)
        }
    } else {
        let settings_cords = -1000
        let main_cords = 0
        while(settings_menu.style.left != "0px" && main_menu.style.left != "-1000px") {
            settings_menu.style.left = `${settings_cords}px`;
            main_menu.style.left = `${main_cords}px`;

            settings_cords += move_amount;
            main_cords -= move_amount;
            await sleep(1)
        }
    }
}
*/
function switch_pages() {
    if (settings_menu.hidden == true) {
        main_menu.hidden = true;
        settings_menu.hidden = false;
    } else {
        settings_menu.hidden = true;
        main_menu.hidden = false;
    }
}