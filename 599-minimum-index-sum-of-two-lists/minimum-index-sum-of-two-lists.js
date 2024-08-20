/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let position = {}
    for (let i = 0; i < list1.length; i++) {
        if (!position[list1[i]]) {
            position[list1[i]] = i + 1
        }
    }
    let minIndexSum = list1.length + list2.length
    let minListVal = [];
    for (let i = 0; i < list2.length; i++) {
        if (position[list2[i]]) {
            if (position[list2[i]] + i < minIndexSum) {
                minIndexSum = position[list2[i]] + i
            }
        }
    }
    for (let i = 0; i < list2.length; i++) {
        if (position[list2[i]]) {
            if (position[list2[i]] + i === minIndexSum) {
                minListVal.push(list2[i])
            }
        }
    }
    return minListVal
};