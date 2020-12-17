function buy_printer(type) {
    if (player.material >= player[type].price && player[type].amount >= 1) {
        
        player.material -= player[type].price
        player[type].amount++

        player[type].price = up_percent(player[type].price, player[type].mult)
        player[type].mult = up_percent(player[type].mult, player[type].mult_mult)
    }
}