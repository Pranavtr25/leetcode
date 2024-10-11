/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    let arr = date.split('-')
    let res = ""
    for (let i = 0; i < arr.length; i++) {
        let decimal = Number(arr[i])
        let str = ""
        while (decimal) {
            let rem = decimal % 2
            str = rem + str
            decimal = Math.floor(decimal / 2)
        }
        res += str
        if (i !== arr.length - 1) {
            res += '-'
        }
    }
    return res;
};