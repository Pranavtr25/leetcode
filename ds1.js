let arr = [1,2,3,4,5,6,7,7,8,9,224,556,678,98765,567876]

// function binary(arr,value){
//     let left = 0
//     let right = arr.length-1
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid]===value){
//             return mid
//         }
//         if(arr[mid]<value){
//             left = mid+1
//         }else if(arr[mid]>value){
//             right = mid-1
//         }
//     }
//     return -1
// }

// console.log(binary(arr,224))

function binaryRecursive(arr,target,left=0,right=arr.length-1){

    if(right<left){
        return -1
    }
    let mid = Math.floor((left + right)/2)
    if(arr[mid]===target){
        return mid
    }else if(target<arr[mid]){
        return binaryRecursive(arr,target,left,mid-1)
    }else if(target>arr[mid]){
        return binaryRecursive(arr,target,mid+1,right)
    }
}

console.log(binaryRecursive(arr,224))

// function fibonacci(value){
//     let arr=[0,1]
//     for(let i=2;i<=value;i++){
//         arr.push(arr[i-1]+arr[i-2])
//     }
//     return arr
// }

// console.log(fibonacci(6))


// function linear(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
//     return-1
// }

// console.log(linear(arr,4))


// const str = "apple"

// function string(str,existVal,replaceVal){
//     let newStr = ""
//     for(let i=0;i<str.length;i++){
//         if(str[i]===existVal){
//             newStr += replaceVal
//         }else{
//             newStr += str[i]
//         }
//     }
//     return newStr
// }

// console.log(string(str,"p","d"))


// function factorialRecursive(n){
//     if(n===0 || n===1){
//         return 1
//     }else if(n<0){
//         return -1
//     }
//     return n * factorialRecursive(n-1)
// }

// console.log(factorialRecursive(4))


// function fibonacciRecursive(n){
//     if(n<0){
//         return -1
//     }
//     if(n===0){
//         return 0
//     }else if(n===1){
//         return 1
//     }
//     return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
// }

// console.log(fibonacciRecursive(8));