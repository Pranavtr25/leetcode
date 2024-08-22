/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let binary = ""
    while (num) {
        let rem = num % 2;
        binary = rem + binary;
        num = Math.floor(num / 2)
    }
    let binaryComplement = ""
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            binaryComplement += '0'
        } else {
            binaryComplement += '1'
        }
    }
    let i = 0;
    let integer = 0
    while (i < binaryComplement.length) {
        integer = integer * 2 + Number(binaryComplement[i])
        i++;
    }
    return integer;
};