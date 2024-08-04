/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    let sentenceArr = sentence.split(" ")
    for (let i = 0; i < sentenceArr.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
            if (sentenceArr[i].substr(0, dictionary[j].length) === dictionary[j]) {
                sentenceArr[i] = dictionary[j]
            }
        }
    }
    return sentenceArr.join(" ");
};