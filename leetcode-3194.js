// 3194. Minimum Average of Smallest and Largest Elements

var minimumAverage = function(nums) {
    nums.sort((a,b) => a-b)
    let minAvg = nums[nums.length-1]
    let min = 0
    let max = 0
    while(nums.length){
        min = nums.shift()
        max = nums.pop()
        if((min+max)/2 < minAvg){
            minAvg = (min+max)/2
        }
    }
    return minAvg
};