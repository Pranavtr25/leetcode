class Node {
    constructor(){
        this.childrens = {}
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            if(!curr.childrens[word[i]]){
                curr.childrens[word[i]] = new Node()
            }
            curr = curr.childrens[word[i]]
        }
        curr.isEnd = true
    }

    search(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            if(!curr.childrens[word[i]]){
                return false
            }
            curr = curr.childrens[word[i]]
        }
        return curr.isEnd
    }

    prefix(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            if(!curr.childrens[word[i]]){
                return false
            }
            curr= curr.childrens[word[i]]
        }
        return true
    }

    print(node = this.root,str="",values=[]){
        if(node.isEnd){
            values.push(str)
        }
        for(let key in node.childrens){
            this.print(node.childrens[key],str+key,values)
        }
        return values
    }

    autoFill(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            if(!curr.childrens[word[i]]){
                return -1
            }
            curr = curr.childrens[word[i]]
        }

        return this.print(curr,word,[])
    }
}

const trie = new Trie()
trie.insert("pranav")
trie.insert("prathyusha")
trie.insert("preethi")
console.log(trie.search("pranav"))
console.log(trie.prefix("parva"))
console.log(JSON.stringify(trie.root))
// console.log(trie.print())
console.log(trie.autoFill("pra"))



