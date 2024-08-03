/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    let obj = {}
    for (let i = 0; i < target.length; i++) {
        if (obj[target[i]]) {
            obj[target[i]]++;
        } else {
            obj[target[i]] = 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            return false
        } else {
            if (obj[arr[i]] === 1) {
                delete obj[arr[i]]
            } else {
                obj[arr[i]]--;
            }
        }
    }
    return Object.keys(obj).length ? false : true
};