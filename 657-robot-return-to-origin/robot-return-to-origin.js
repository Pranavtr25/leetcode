/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "U") {
            count1++;
        } else if (moves[i] === "D") {
            count1--;
        } else if (moves[i] === "R") {
            count2++;
        } else if (moves[i] === "L") {
            count2--;
        }
    }
    if (count1 === 0 && count2 === 0) {
        return true
    } else {
        return false
    }
};