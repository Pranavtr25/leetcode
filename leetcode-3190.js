// 3190. Find Minimum Operations to Make All Elements Divisible by Three

var minimumOperations = function(nums) {
    let count = 0
    for(let i = 0; i < nums.length ; i++){
        if(nums[i] % 3 !== 0){
            count++;
        }
    }
    return count;
};