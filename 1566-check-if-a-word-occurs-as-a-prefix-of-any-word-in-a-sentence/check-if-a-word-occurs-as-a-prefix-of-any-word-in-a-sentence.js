/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    sentence = sentence.split(' ')
    console.log(sentence)
    for (let i = 0; i < sentence.length; i++) {
        let j = 0;
        let flag = 1
        while (j < searchWord.length) {
            if (sentence[i][j] !== searchWord[j]) {
                flag = 0;
                break;
            }
            j++;
        }
        if (flag) {
            return i + 1;
        }
    }
    return -1;
};