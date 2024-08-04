/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n <= 0){
        return false
    } 
    while(n > 0){
        let flag = 0
        if(n % 5 === 0){
            flag = 1;
            n = n/5
        }else if(n % 3 === 0) {
            flag = 1;
            n = n/3
        }else if(n % 2 === 0){
            flag = 1;
            n = n/2
        }
        if(!flag){
            break;
        }
    }
    if(n === 1){
        return true
    } else{
        return false
    }
};