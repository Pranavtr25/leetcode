/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    let res = []
    for (let i = 0; i < queries.length; i++) {
        let xorVal;
        if (queries[i][0] === queries[i][1]) {
            xorVal = arr[queries[i][0]]
        } else {
            xorVal = arr[queries[i][0]]
            for (let j = queries[i][0] + 1; j <= queries[i][1]; j++) {
                xorVal ^= arr[j]
            }
        }
        res.push(xorVal)
    }
    return res;
};