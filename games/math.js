//Rounds number to the tenth
function to_tenth(number) {
    return Math.round(10 * number) / 10
}
//Calculates percent between 2 numbers
function calc_missing_percent(num1, num2) {
    percent = Math.round(10 * ((num1/num2) * 100))/10;
    if (percent <= 99.9) {
        return Math.round(10 * ((num1/num2) * 100))/10;
    } else {
        return 100;
    }
}
function up_percent(num, percent) {
    percent = percent/100
    result = num + num * percent
    result = to_tenth(result)
    return result
}
//Rounds number to the tenth
function to_tenth(number) {
    return Math.round(10 * number) / 10
}