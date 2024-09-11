/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let count = 0;
    function decimalToBinary(value) {
        let res = ""
        let val = value
        while (val) {
            let rem = val % 2;
            res = rem + res;
            val = Math.floor(val / 2)
        }
        return res;
    }
    let binaryOfStart = decimalToBinary(start)
    let binaryOfGoal = decimalToBinary(goal)
    if (binaryOfStart.length < binaryOfGoal.length) {
        let diff = binaryOfGoal.length - binaryOfStart.length
        while (diff) {
            binaryOfStart = 0 + binaryOfStart
            diff--;
        }
    } else if (binaryOfStart.length > binaryOfGoal.length) {
        let diff = binaryOfStart.length - binaryOfGoal.length
        while (diff) {
            binaryOfGoal = 0 + binaryOfGoal
            diff--;
        }
    }
    for (let i = 0; i < binaryOfStart.length; i++) {
        if (binaryOfStart[i] !== binaryOfGoal[i]) {
            count++;
        }
    }
    return count;
};