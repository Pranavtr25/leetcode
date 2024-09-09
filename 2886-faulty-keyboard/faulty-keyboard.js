/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    while (s.indexOf("i") !== -1) {
        let str = s.indexOf("i")
        s = s.substring(0, str).split('').reverse().join('') + s.substring(str + 1)

    }
    return s;
};