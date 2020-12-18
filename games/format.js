function formatNum(number) {

    len = Number(Number(number).toExponential().split("e+")[1])
    num = Number(number)
    if (len >= 3 && len < 6) {
        return (num / 1e+3).toFixed(1) + "K"
    } else if (len >= 6 && len < 9) {
        return (num / 1e+6).toFixed(1) + "M"
    } else if (len >= 9 && len < 12) {
        return (num / 1e+9).toFixed(1) + "B"
    } else if (len >= 12 && len < 15) {
        return (num / 1e+12).toFixed(1) + "T"
    } else if (len >= 15 && len < 19) {
        return (num / 1e+15).toFixed(1) + "Q"
    } else if (len >= 19) {
        return num.toExponential()
    } else {
        return num
    }
}

/*
1 000 = 4 char - K
1 000 000 = 7 char - M
1 000 000 000 = 10 char - B
1 000 000 000 = 13 char - T
1 000 000 000 000 = 16 char - Q
*/

function isExponential(number) {
    b = number.toExponential().toString()
    e = b.split("e+")
    if (Number.isInteger(Number(e[0])) && Number.isInteger(Number(e[1]))) {
        return true
    } else {
        return false
    }
}