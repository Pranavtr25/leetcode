/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let dummyArr = [...arr]
    let obj = {}
    let res = []
    dummyArr.sort((a, b) => a - b)
    let rank = 1;
    for (let i = 0; i < dummyArr.length; i++) {
        if (!obj[dummyArr[i]]) {
            obj[dummyArr[i]] = rank
            rank++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        res.push(obj[arr[i]])
    }
    return res;
};