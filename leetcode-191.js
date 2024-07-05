// 191. Number of 1 Bits

var hammingWeight = function(n) {
    let binary = []
    while(n!==0){
        let val = n%2
        binary.unshift(val)
        n = Math.floor(n/2);
    }
    let count = 0
    for(let i=0;i<binary.length;i++){
        if(binary[i] === 1){
            count++;
        }
    }
    return count;
};