//  961. N-Repeated Element in Size 2N Array

var repeatedNTimes = function(nums) {
    let obj = {}
    let n = nums.length / 2;
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]]++;
            if(obj[nums[i]] === n){
                return nums[i]
            }
        }else{
            obj[nums[i]] = 1;
        }
    }
};