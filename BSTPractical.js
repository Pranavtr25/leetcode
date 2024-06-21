class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null 
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
            return this
        }
        let curr = this.root
        while(true){
            if(value === curr.value){
                return -1
            }
            if(value < curr.value){
                if(curr.left === null){
                    curr.left = node
                    return this
                }
                curr = curr.left
            }else if(value > curr.value){
                if(curr.right === null){
                    curr.right = node
                    return this
                }
                curr = curr.right
            }
        }
    }

    find(value){
        if(this.root === null){
            return -1
        }
        let curr = this.root
        while(curr){
            if(value === curr.value){
                return true
            }
            if(value < curr.value){
                curr = curr.left
            }else if(value > curr.value){
                curr = curr.right
            }
        }
        return null
    }

    BFS(){
        let queue =[]
        let visited = []
        queue.push(this.root)
        while(queue.length){
            let node = queue.shift()
            visited.push(node.value)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return visited
    }

    DFSPreOrder(){
        let visited = []
        function traversal(node){
            visited.push(node.value)
            if(node.left){
                traversal(node.left)
            }
            if(node.right){
                traversal(node.right)
            }
        }
        traversal(this.root)
        return visited
    }

    DFSInOrder(){
        let visited = []
        function traversal(node){
            if(node.left){
                traversal(node.left)
            }
            visited.push(node.value)
            if(node.right){
                traversal(node.right)
            }
        }
        traversal(this.root)
        return visited
    }

    DFSPostOrder(){
        let visited = []
        function traversal(node){
            if(node.left){
                traversal(node.left)
            }
            if(node.right){
                traversal(node.right)
            }
            visited.push(node.value)
        }
        traversal(this.root)
        return visited
    }

    
}

const tree = new BinaryTree()
console.log(tree.insert(13))
console.log(tree.insert(11))
console.log(tree.insert(15))
console.log(tree.insert(5))
console.log(tree.insert(12 ))
// console.log(tree.find(18))
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSInOrder())
console.log(tree.DFSPostOrder())
