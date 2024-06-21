// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         if(this.size){
//             return false
//         }else{
//             return true
//         }
//     }

//     print(){
//         if(this.size===0){
//             return "List is empty"
//         }else{
//             let curr = this.head
//             let res= ""
//             while(curr){
//                 res += curr.value+" "
//                 curr = curr.next
//             }
//             return res
//         }
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.size===0){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++;
//     }

//     append(value){
//         const node = new Node(value);
//         if(this.size===0){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++;
//     }

//     removeFront(){
//         if(this.size===0){
//             return null
//         }else{
//             this.head = this.head.next
//         }
//         this.size--;
//     }

//     removeEnd(){
//         if(this.size===0){
//             return null
//         }
//         if(this.size===1){
//             this.head = null
//             this.tail = null
//             return true
//         }else{
//             let prev = this.head
//             while(prev.next!==this.tail){
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--;
//         return true
//     }

// }

// const list = new LinkedList()
// list.append(34)
// list.append(99)
// console.log(list)
// // list.removeFront()
// console.log(list)
// list.removeEnd()
// console.log(list)
// list.append(34)
// list.append(60)
// list.append(100)
// console.log(JSON.stringify(list))


class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LinkedList{

    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    getSize(){
        return this.size
    }

    print(){
        let curr = this.head
        let res=""
        while(curr){
            res += curr.value+" "
            curr = curr.next
        }
        return res
    }

    unshift(value){
        const node = new Node(value)
        if(this.size===0){
            this.head = node
            this.tail = node
        }else{
            let val = this.head
            node.next = this.head
            this.head = node
            val.prev = node
        }
        this.size++;
        return true
    }

    shift(){
        if(this.size===0){
            return -1
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--;
        return true
    }

    insert(value,index){
        if(index<0 || index>this.size){
            return "invalid index"
        }
        let node = new Node(value)
        if(index===0){
            let next=this.head
            node.next = this.head
            next.prev = node
            this.head = node
            
        }else if(index===this.size){
            this.tail.next = node
            node.prev = this.tail
            this.tail = node 
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next 
            }
            node.next = prev.next
            node.prev = prev
            prev.next = node
            if(index===this.size-1){
                this.tail.prev = node
            }
        }
        this.size++;
        return list
    }

    oddEvenArr(){
        let arr1 = []
        let arr2 = []
        let curr = this.head
        while(curr){
            if(curr.value%2===0){
                arr1.push(curr.value)
            }else{
                arr2.push(curr.value)
            }
            curr = curr.next
        }
        return [arr1,arr2]
    }

    prime(){
        let arr = []
        let curr = this.head
        while(curr){
            let flag=0
            for(let i=2;i<=curr.value/2;i++){
                if(curr.value%i===0){
                    flag=1
                    break;
                }
            }
            if(!flag){
                arr.push(curr.value)
            }
            curr = curr.next
        }
        return arr
    }

    remove(value){
        if(value===this.head.value){
            this.head = this.head.next
            this.head.prev = null
            return
        }
        let prev = null
        let curr = this.head
        while(curr.value!==value){
            prev = curr
            curr = curr.next
        }
        let next = curr.next
        next.prev = prev
        prev.next = next
        this.size--
        return
    }

    isCircle(){
        // this.tail.next = this.head
        // console.log(this.tail)
        if(this.tail.next===this.head){
            return true
        }else{
            return false
        }
    }


}


const list = new LinkedList()
console.log(list.unshift(4))
console.log(list.unshift(7))
console.log(list.unshift(10))
// console.log(list.shift())
console.log(list.print())
console.log(list.insert(77,3))
console.log(list.print())
console.log(list.oddEvenArr())
console.log(list.prime())
// console.log(list.print())
// console.log(list.remove(10))
console.log(list.print())
console.log(list.isCircle())
