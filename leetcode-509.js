//  509. Fibonacci Number

var fib = function(n) {
    if(n==0) return 0
    if(n==1) return 1

    let pr1=1
    let pr2=0
    let curr=0
    for(let i=2;i<=n;i++){
        curr=pr2+pr1
        pr2=pr1
        pr1=curr

    }
    return curr
    
};