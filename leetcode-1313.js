//  1313. Decompress Run-Length Encoded List

var decompressRLElist = function(nums) {
    let res = []
    for(let i = 0; i < nums.length; i+=2){
        let j = 0;
        while(j<nums[i]){
            res.push(nums[i+1])
            j++;
        }
    }
    return res;
};