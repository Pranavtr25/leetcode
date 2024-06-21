class Tree{
    constructor(value=0,left=null,right=null){
        this.value = value
        this.left = left
        this.right = right
    }
}
   function isMirror(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }
        if(!tree1 || !tree2){
            return false
        }
        if(tree1.val === tree2.val && isMirror(tree1.left,tree2.right) && isMirror(tree1.right,tree2.left)){
            return true;
        }else {
            return false
        }
    }

const tree1 = new Tree(1)
tree1.left = new Tree(2)
tree1.right = new Tree(3)
tree1.left.left = new Tree(4)
tree1.left.right = new Tree(5)

const tree2 = new Tree(1)
tree2.left = new Tree(3)
tree2.right = new Tree(2)
tree2.right.right = new Tree(5)
tree2.right.left = new Tree(4)
console.log(isMirror(tree1,tree2))