

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        if(this.size){
            return false
        }else{
            return true
        }
    }
    prepend(value){
        const node = new Node(value)
        if(this.size===0){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++;
    }
    print(){
        if(this.size===0){
            return "List is empty"
        }else{
            let curr = this.head
            let res= ""
            while(curr){
                res += curr.value+" "
                curr = curr.next
            }
            return res
        }
    }
    
    // insert(value,index){
    //     if(index<0 || index>this.size){
    //         console.log("invalid index") 
    //     }else if(index===0){
    //         const node = new Node(value)
    //         if(this.size===0){
    //             this.head = node
    //         }else{
    //             node.next = this.head
    //             this.head = node
    //         }
    //         this.size++;
    //     }else{
    //         let prev = this.head
    //         for(let i=0;i<index-1;i++){
    //             prev = prev.next
    //         }
    //         const node = new Node(value)
    //         node.next = prev.next
    //         prev.next = node
    //         this.size++;
    //     }
    // }
    
    insert(value,index){
        if(index<0 || index>this.size){
            console.log("invalid index") 
            return
        }
        const node = new Node(value)
        if(index===0){
            if(this.size===0){
                this.head = node
            }else{
                node.next = this.head
                this.head = node
            }
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++;
    }
   
    // remove(index){
    //     if(index<0 || index>=this.size){
    //         return "invalid index"
    //     }
    //     let removedVal
    //     if(index===0){
    //         removedVal=this.head
    //         this.head = this.head.next
    //     }else{
    //         let prev = this.head
    //         for(let i=0;i<index-1;i++){
    //             prev = prev.next
    //         }
    //         removedVal = prev.next
    //         prev.next = removedVal.next
    //     }
    //     this.size--;
    //     return removedVal.value
    // }
    
    remove(index){
        if(index<0 || index>=this.size){
            console.log("index invalid")
        }
        if(index===0){
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            prev.next=prev.next.next
        }
        this.size--;
        return true
    }
    
    removeValue(value){
        if(this.size===0){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--;
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value!==value){
                prev = prev.next
            }
            if(prev.next){
                prev.next = prev.next.next
                this.size--;
                return true
            }
            return null
        }
    }
    
    search(value){
        if(this.size===0){
            return -1
        }
        let i = 0
        let curr = this.head
        while(curr){
            if(curr.value===value){
                return i
            }
            curr = curr.next
            i++;
        }
        return -1
    }

    
    // reverse(){
    //     let prev = null
    //     let curr = this.head
    //     while(curr){
    //         let nextVal = curr.next
    //         curr.next=prev
    //         prev=curr
    //         curr=nextVal
    //     }
    //     this.head=prev
    // }
    
    
    
    
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev=curr
            curr=next
        }
        this.head=prev
        return this.head
    }
    
    
    append(value){
        const node = new Node(value)
        if(this.size===0){
            this.head=node
        }else{
            let curr = this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next = node
        }
        this.size++;
    }
    
    
    arrToList(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
        }
    }

    isCircle(){
        let slow = this.head
        let fast = this.head
        while(fast){
            fast = fast.next.next
            slow = slow.next
            if(slow===fast){
                return true
            }
        }
        return false
    }
    
}

const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(55)
// console.log(list.print())
// list.insert(88,2)
// console.log(list.print())
// // console.log(list.isEmpty())
// console.log(list.remove(2))
// console.log(list.print())
// list.insert(900,2)
// console.log(list.print())
// console.log(list.removeValue(55))
console.log(list.print())
// console.log(list.search(10))
console.log(list.reverse())

console.log(list.print())
list.append(9900)
console.log(list.print())
list.arrToList([3,4,5,6,7,8])
console.log(list.print())
console.log(list.isCircle())
// console.log(list)
// console.log(JSON.stringify(list))


