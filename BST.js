class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{

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
            if(value===curr.value){
                return -1
            }
            if(value<curr.value){
                if(curr.left === null){
                    curr.left = node
                    return this
                }
                curr = curr.left
            }else if(value>curr.value){
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
            if(value<curr.value){
                curr = curr.left
            }else if(value>curr.value){
                curr = curr.right
            }
            else {
                return true
            }
        }
        return false
    }

    BFS(){
        let queue = []
        let visited = []
        queue.push(this.root)
        while(queue.length){
            let valNode = queue.shift()
            visited.push(valNode.value)
            if(valNode.left){
                queue.push(valNode.left)
            }
            if(valNode.right){
                queue.push(valNode.right)
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

    isBST(){
        function isBinary(node,min,max){
            if(!node){
                return true
            }
            if(node.value <= min || node.value >= max){
                return false
            }
            return isBinary(node.left,min,node.value) && isBinary(node.right,node.value,max)
        }
        return isBinary(this.root,-Infinity,Infinity)
    }

}

const tree = new BinarySearchTree()
console.log(tree.insert(10))
console.log(tree.insert(5))
console.log(tree.insert(16))
console.log(tree.insert(2))
console.log(tree.insert(6))
console.log(tree.insert(14))
console.log(tree.insert(19))
console.log(tree.find(10))
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())

