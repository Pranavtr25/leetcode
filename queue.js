// class Queue{
//     constructor(){
//         this.items=[]
//     }

//     enqueue(value){
//         this.items.push(value)
//     }

//     dequeue(){
//         this.items.shift()
//     }

//     isEmpty(){
//         if(this.items.length){
//             return false
//         }else{
//             return true
//         }
//     }

//     peak(){
//         if(this.items.length){
//             return this.items[0]
//         }else{
//             return null
//         }
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//         return this.items.toString()
//     }
// }

// const queue = new Queue()

// queue.enqueue(5)
// queue.enqueue(3)
// queue.enqueue(57)
// queue.enqueue(98)
// queue.enqueue(3)
// console.log(queue.print())
// queue.dequeue()
// console.log(queue.print())
// console.log(queue.peak())
// console.log(queue.isEmpty())



// class Queue {
//     constructor(){
//         this.items = {}
//         this.front = 0
//         this.rear = 0
//     }

//     enqueue(value){
//         this.items[this.rear] = value
//         this.rear ++;
//     }

//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++;
//         return item
//     }

//     print(){
//         console.log(this.items)
//     }
    
//     isEmpty(){
//         if(this.rear - this.front === 0){
//             return true
//         }else{
//             return false
//         }
//     }

//     size(){
//         if(this.rear - this.front === 0){
//             return null
//         }else{
//             return this.rear - this.front
//         }
//     }

//     peek(){
//         return this.items[this.front]
//     }
// }

// const queue = new Queue()
// queue.enqueue(2)
// queue.enqueue(4)
// queue.enqueue(9)
// queue.print()
// // console.log(queue.dequeue())
// // console.log(queue.dequeue())
// // console.log(queue.dequeue())
// queue.print()
// console.log(queue.isEmpty())
// console.log(queue.size())
// console.log(queue.peek())



class CircularQueue {
    constructor(size){
        this.items = new Array(size)
        this.size = size
        this.currentLength=0
        this.front = -1
        this.rear = -1
    }

    enqueue(value){
        if(this.currentLength<this.size){
            this.rear = (this.rear+1)%this.size
            this.currentLength+=1;
            this.items[this.rear] = value            
            if(this.front===-1){
                this.front = this.rear
            }
        }else{
            return false
        }
    }

    print(){
        if(this.currentLength>0){

            let res = ""
            for(let i=this.front;i<=this.rear;i=(i+1)%this.size){
                res = res+this.items[i] + " "
            }
            return res
        }else{
            return null
        }
    }

    dequeue(){
        if(this.currentLength>0){
            const val = this.items[this.front]
            this.items[this.front] = null
            this.front = (this.front + 1) % this.size
            this.currentLength-=1;
            if(this.currentLength===0){
                this.front = -1
                this.rear = -1
            }    
            return val
        }else{
            return null
        }
    }
    // dequeue(){
    //     if(this.currentLength){
    //         this.front = (this.front) % this.size
    //         const val = this.items[this.front]
    //         this.items[this.front] = null
    //         this.front+=1
    //         this.currentLength--;
    //         if(this.front==this.size){
    //             this.front = -1
    //             this.rear = -1
    //         }
    //         return val
    //     }else{
    //         return null
    //     }

    // }

    isFull(){
        if(this.currentLength===this.size){
            return true
        }else{
            return false
        }
    }
}

const queue = new CircularQueue(5)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(1)
queue.enqueue(1)
queue.enqueue(1)
console.log(queue.dequeue())
queue.enqueue(1)
// console.log(queue.print())
// console.log(queue)
// console.log(queue.print())
console.log(queue)
console.log(queue.isFull())
console.log(queue.items[4])
// queue.enqueue(6)
