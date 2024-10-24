/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let minDiff = Math.abs(arr[0] - arr[1])
    let res = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) < minDiff) {
            minDiff = Math.abs(arr[i] - arr[i + 1])
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) === minDiff) {
            res.push([arr[i], arr[i + 1]])
        }
    }
    return res;
};