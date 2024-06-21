class MinBinaryHeap{
    constructor(){
        this.items = []
    }

    insert(value){
        this.items.push(value)
        let index = this.items.length-1
        while(index>0){
            let element = this.items[index]
            let parentIndex = Math.floor((index-1)/2)
            let parentElement = this.items[parentIndex]
            if(element>parentElement){
                return this.items
            }
            this.items[index] = parentElement
            this.items[parentIndex] = element
            index = parentIndex
        }
        return this.items
    }

    extractMin(){
        let removeVal = this.items[0]
        let length = this.items.length
        let insertVal = this.items.pop()
        if(this.items.length<1){
            return removeVal
        }
        this.items[0] = insertVal
        let index = 0
        while(true){
            let leftIndex = (2*index) + 1
            let rightIndex = (2 * index) + 2
            let sort
            if(leftIndex < length){
                if(this.items[index] > this.items[leftIndex]){
                    sort = leftIndex
                }
            }
            if(rightIndex < length){
                if((!sort && this.items[index] > this.items[rightIndex]) ||
                 (sort && this.items[rightIndex]<this.items[leftIndex])){
                    sort = rightIndex
                }
            }
            if(!sort){
                break
            }

            let temp = this.items[sort]
            this.items[sort] = this.items[index]
            this.items[index] = temp
            index = sort 
        }
        return removeVal
    }

    minHeapSort(){
        let arr = []
        while(this.items.length){
            arr.push(this.extractMin())
        }
        return arr;
    }
}

const heap = new MinBinaryHeap()
console.log(heap.insert(23))
console.log(heap.insert(67))
console.log(heap.insert(83))
console.log(heap.insert(4))
console.log(heap.insert(2))
console.log(heap.insert(89))
console.log(heap.insert(1))
console.log(heap.minHeapSort())
// console.log(heap.extractMin())
// console.log(heap.extractMin())
// console.log(heap.extractMin())
console.log(heap.items)