/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    let res = 0;
    while (grid[0].length) {
        let maxValArr = [];
        for (let i = 0; i < grid.length; i++) {
            let val = maxIndex(grid[i]);
            let removeVal = grid[i].splice(val, 1);
            maxValArr.push(removeVal[0]);
        }
        res += Math.max(...maxValArr);
    }
    return res;

    function maxIndex(arr) {
        let maxVal = -Infinity;
        let maxIndex;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxVal) {
                maxVal = arr[i];
                maxIndex = i;
            }
        }
        return maxIndex;
    }
};