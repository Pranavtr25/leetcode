let arr = [-6,20,8,-2,4]  
 // ans : [ -6, -2, 4, 8, 20 ]

// function bubbleSort(arr){
//     let isSorted = true
//     while(isSorted){
//         isSorted = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 isSorted =true
//                 let temp = arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort(arr))

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let valueToInsert = arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>valueToInsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=valueToInsert
//     }
//     return arr
// }


// // console.log(insertionSort(arr))

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let left = []
//     let right = []
//     let pivot = arr[arr.length-1]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort(arr))


// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return sort(mergeSort(left),mergeSort(right))
// }

// function sort(arr1,arr2){
//     let res = []
//     while(arr1.length && arr2.length){
//         if(arr1[0]<=arr2[0]){
//             res.push(arr1.shift())
//         }else{
//             res.push(arr2.shift())
//         }
//     }
//     return [...res,...arr1,...arr2]
// }

// console.log(mergeSort(arr))


// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minIndex = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minIndex]>arr[j]){
//                 minIndex = j
//             }
//         }
//         if(minIndex!==i){
//             let temp = arr[i]
//             arr[i]=arr[minIndex]
//             arr[minIndex]=temp
//         }
//     }
//     return arr
// }
// console.log(selectionSort(arr))

// function quickSort(arr,left=0,right=arr.length-1){
//     if(left<right){
//         let loc = partition(arr,left,right)
//         quickSort(arr,left,loc-1)
//         quickSort(arr,loc+1,right)
//     }
//     return arr
// }

// function partition(arr,left,right){
//     let pivot = arr[left]
//     let start = left
//     let end = right
//     while(start<end){
//         while(arr[start]<=pivot){
//             start++;
//         }
//         while(arr[end]>pivot){
//             end--;
//         }
//         if(start<end){
//             let temp=arr[start]
//             arr[start]=arr[end]
//             arr[end]=temp
//         }
//     }
//     let temp = arr[left]
//     arr[left] = arr[end]
//     arr[end] = temp;
// }

// console.log(quickSort(arr))



// function bubbleSort(arr){
//     let isSorted = false
//     while(!isSorted){
//         isSorted = true
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 isSorted = false
//                 let temp = arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort(arr))

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let value = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>value){
//             arr[j+1]=arr[j]
//             j--;
//         }
//         arr[j+1] = value
//     }
//     return arr
// }

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid) 
//     return sort(mergeSort(left),mergeSort(right))
// }

// function sort(left,right){
//     let res=[]
//     while(left.length && right.length){
//         if(left[0]>right[0]){
//             res.push(right.shift())
//         }else{
//             res.push(left.shift())
//         }
//     }
//     return [...res,...left,...right]
// }

// console.log(mergeSort(arr))

// function bubbleSort(arr){
//     let isSorted = false
//     while(!isSorted){
//         isSorted = true
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 isSorted = false
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort(arr))

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let valueToInsert = arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>valueToInsert){
//             arr[j+1]=arr[j]
//             j--;
//         }
//         arr[j+1]=valueToInsert
//     }
//     return arr
// }

// console.log(insertionSort(arr))


// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return sort(mergeSort(left),mergeSort(right))
// }

// function sort(left,right){
//     let res = []
//     while(left.length && right.length){
//         if(left[0]>right[0]){
//             res.push(right.shift())
//         }else{
//             res.push(left.shift())
//         }
//     }
//     return [...res,...left,...right]
// }

// console.log(mergeSort(arr))


// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<min){
//                 min = j
//             }
//         }
//         if(min!==i){
//             let temp = arr[i]
//             arr[i]=arr[min]
//             arr[min] = temp
//         }
//     }
//     return arr
// }

// console.log(selectionSort(arr))

// function bubbleSort(arr){
//     let isSorted = false
//     while(!isSorted){
//         isSorted = true
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 isSorted = false
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr))

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let insertVal = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>insertVal){
//             arr[j+1] = arr[j]
//             j--;
//         }
//         arr[j+1] = insertVal
//     }
//     return arr
// }
// console.log(insertionSort(arr))

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return sort(mergeSort(left),mergeSort(right))
// }
// function sort(left,right){
//     let res = []
//     while(left.length && right.length){
//         if(right[0]<left[0]){
//             res.push(right.shift())
//         }else{
//             res.push(left.shift())
//         }
//     }
//     return [...res,...left,...right]
// }
// console.log(mergeSort(arr))

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minVal = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minVal]){
                minVal = j
            }
        }
        if(minVal!==i){
            let temp = arr[i]
            arr[i] = arr[minVal]
            arr[minVal] = temp
        }
    }
    return arr
}
console.log(selectionSort(arr))

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let left = []
//     let right = []
//     let pivot = arr[arr.length-1]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort(arr))

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let insertVal = arr[i]
        let j = i+1
        while(j>=0 && arr[j]>insertVal){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = insertVal
    }
    return console.log(arr)
}

console.log(insertionSort(arr))