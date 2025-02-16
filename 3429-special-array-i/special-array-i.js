/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let isEven = (nums[0] % 2 === 0) ? true : false;
    let res = true;
    for(let i=1;i<nums.length;i++){
        if(isEven){
            if(nums[i] % 2 === 0){
                return false;
            }else{
                isEven = false;
            }
        }else{
            if(nums[i] % 2 !== 0){
                return false;
            }else{
                isEven = true;
            }
        }
    }
    return true;
};