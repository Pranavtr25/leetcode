/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
    let i = 0;
    let prev = 1;
    let res = 0;
    while (i < n) {
        let val = prev + i * 4;
        prev = val;
        res = val;
        i++;
    }
    return res;
};