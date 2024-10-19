/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let sortedScore = [...score]
    let obj = {}
    let res = []
    sortedScore.sort((a, b) => b - a)
    for (let i = 0; i < sortedScore.length; i++) {
        if (i === 0) {
            obj[sortedScore[i]] = "Gold Medal"
        } else if (i === 1) {
            obj[sortedScore[i]] = "Silver Medal"
        } else if (i === 2) {
            obj[sortedScore[i]] = "Bronze Medal"
        } else {
            obj[sortedScore[i]] = `${i+1}`
        }
    }
    for (let i = 0; i < score.length; i++) {
        res.push(obj[score[i]])
    }
    return res;
};