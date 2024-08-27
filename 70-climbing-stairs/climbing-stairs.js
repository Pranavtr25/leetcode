/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==0) return 1
    if(n==1) return 1

    let pr1=1
    let pr2=1
    let curr=0
    for(let i=2;i<=n;i++){
        curr=pr2+pr1
        pr2=pr1
        pr1=curr

    }
    return curr
};