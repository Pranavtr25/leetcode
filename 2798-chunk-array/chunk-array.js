/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let final = []
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i])
        if (i == arr.length - 1) {
            final.push(res)
            break;
        }
        if (res.length == size) {
            final.push(res)
            res = []
        }
    }
    return final
};
