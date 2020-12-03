main_menu = document.getElementById("main_menu");
settings_menu = document.getElementById("settings_menu");

home_button = document.getElementById("home_button");
settings_button = document.getElementById("settings_button");

function switch_pages(page) {
    if (page == "settings_menu") {
        main_menu.hidden = true;
        settings_menu.hidden = false;

        settings_button.style.backgroundColor = "green"
        home_button.style.backgroundColor = ""
    } else if (page == "main_menu") {
        main_menu.hidden = false;
        settings_menu.hidden = true;

        home_button.style.backgroundColor = "green"
        settings_button.style.backgroundColor = ""
    }
}

home_button.click();
function export_data() {
    document.getElementById("export_data").innerHTML = btoa(localStorage.gm)
}
function import_data() {
    /*
    localStorage.gm = JSON.stringify(atob(document.getElementById("import_data").value))
    location.reload()
    */
}