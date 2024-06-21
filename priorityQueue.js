class PriorityQueue{
    constructor(){
        this.items = []
    }

    insert(val,priority){
        const node = new Node(val,priority)
        this.items.push(node)
        let index = this.items.length - 1
        let value = this.items[index]
        while(index>0){
            let parentIndex = Math.floor((index - 1) / 2)
            let parentValue = this.items[parentIndex]
            if(value.priority < parentValue.priority){
                break
            }
            this.items[parentIndex] = value
            this.items[index] = parentValue
            index = parentIndex
        }
        return this.items
    }

    extractMax(){
        const popVal = this.items[0]
        const insertVal = this.items.pop()
        const size = this.items.length
        if(!this.items.length){
            return this.items
        }
        this.items[0] = insertVal
        let index = 0
        while(true){
            let leftIndex = (index *2)+1
            let rightIndex = (index *2)+2
            let swap
            if(leftIndex<size){
                if(this.items[leftIndex].priority > insertVal.priority){
                    swap = leftIndex
                }
            }
            if(rightIndex<size){
                if((!swap && this.items[rightIndex].priority> insertVal) || swap && this.items[rightIndex].priority>this.items[leftIndex].priority){
                    swap = rightIndex
                }
            }
            if(!swap){
                break
            }
            let temp = this.items[index]
            this.items[index] = this.items[swap]
            this.items[swap] = temp
            index = swap
        }
        return popVal

    }

}

class Node{
    constructor(value,priority){
        this.value = value
        this.priority = priority
    }
}

const queue = new PriorityQueue()
queue.insert("fever",2)
queue.insert("gunshot",10)
queue.insert("severe",9)
queue.insert("moderate",6)
queue.insert("high fever",5)
queue.insert("accident",8)
console.log(queue)
console.log(queue.extractMax())
console.log(queue.extractMax())
console.log(queue)


