/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    if ((high - low) % 2 !== 0) {
        return Math.ceil((high - low)/2)
    } else {
        if (low % 2 !== 0) {
            const val = (high - low) / 2
            return val + 1

        } else {
            return (high - low) / 2
        }
    }
};