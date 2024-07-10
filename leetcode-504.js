// 504. Base 7

var convertToBase7 = function(num) {
    if(num === 0){
        return "0"
    }
    let numCpy = Math.abs(num)
    let str = ""
    while(numCpy!==0){
        let rem = numCpy % 7
        numCpy = Math.floor(numCpy / 7)
        str = rem + str
    }
    if(num < 0){
        return "-" + str
    }else{
        return str
    }
};