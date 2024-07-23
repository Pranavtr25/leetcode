// 1636. Sort Array by Increasing Frequency

var frequencySort = function (nums) {
    let obj = {}
    let res = []
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++;
        }else{
            obj[nums[i]] = 1
        }
    }
    while(Object.keys(obj).length){
    let min = Infinity
    let val = []
        for(let key in obj){
            if(obj[key] < min){
                min = obj[key]
            }
        }
        for(let key in obj){
            if(obj[key] === min){
                val.unshift([Number(key),obj[key]])
                delete obj[key]
            }
        }
        
        for(let i=0;i<val.length-1;i++){
            for(let j=i+1;j<val.length;j++){
                if(val[i][0] < val[j][0]){
                    let temp = val[i]
                    val[i] = val[j]
                    val[j] = temp;
                }
            }
        }
        
        for(let i=0;i<val.length;i++){
            for(let j=0;j<val[i][1];j++){
                res.push(val[i][0])
            }
        }
    }
    return res;
};