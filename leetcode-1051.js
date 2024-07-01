// 1051. Height Checker

var heightChecker = function(heights) {
    let heightsCopy = [...heights]
    heightsCopy.sort((a,b) => a-b)
    let count = 0
    for(let i=0;i<heights.length;i++){
        if(heights[i] !== heightsCopy[i]){
            count++;
        }
    }
    return count;
};