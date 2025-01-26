/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    let count = 0;
    let obj = {};
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                if (!obj[j]) {
                    obj[j] = [i];
                } else {
                    obj[j].push(i)
                }
            }
        }
    }
    for (let i = 0; i < grid.length; i++) {
        let val = 0;
        let sameColCount = 0;
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                val++;
                if (obj[j] !== undefined && obj[j].includes(i) && obj[j].length >= 2) {
                    sameColCount++;
                }
            }
        }
        if (val >= 2) {
            count += val;
        } else {
            if (sameColCount) {
                count += sameColCount;
            }
        }
    }
    return count;
};