// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let value = 0
//         for(let i=0;i<key.length;i++){
//             value += key.charCodeAt(i)
//         }
//         return value % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         this.table[index] = value
//         return value
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     delete(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//         return true
//     }
// }

// const table = new HashTable(10)
// console.log(table.set("name","pranav"))
// console.log(table.set("age",22))
// console.log(table.get("name"))
// console.log(table.set("mane","suresh"))
// console.log(table.get("name"))


class HashTable{

    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let value = 0
        for(let i=0;i<key.length;i++){
            value += key.charCodeAt(i)
        }

        return this.quadratic(value % this.size)
    }

    linear(index){
        for(let i=index;i<this.size;i++){
            if(this.table[index] === undefined){
                return index
            }
            index++;
        }
        return -1
    }

    quadratic(index){
        for(let i=index;i*i<this.size;i++){
            if(this.table[index] === undefined){
                console.log("index")
                return index
            }
            index = i*i
        }
        return-1
    }

    set(key,value){
        let index = this.hash(key)
        console.log(index)
        if(index===-1){
            return "invalid index"
        }
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            for(let i=0;i<bucket.length;i++){
                if(bucket[i][0]===key){
                    bucket[i][1]=value
                    return
                }
            }
            bucket.push([key,value])
            return
        }
        this.table[index] = [key,value]
        return 
    }

    get(key){
        const index = this.hash(key)
        // const bucket = this.table[index]
        // if(bucket){
        //     for(let i=0;i<bucket.length;i++){
        //         if(bucket[i][0]===key){
        //             return bucket[i]
        //         }
        //     }
        // }
        // return -1
        if(index===-1){
            return "invalid index"
        }else{
            return this.table[index]
        }
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            for(let i=0;i<bucket.length;i++){
                if(bucket[i][0]===key){
                    const val = bucket.splice(i,1)
                    return val
                }
            }
        }else{
            return null
        }
    }

    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){

                console.log(i,this.table[i])
            }
        }
        console.log(this.table)
    }

}

const table = new HashTable(10)
table.set("name","pranav")
table.set("enam","suresh")
// console.log(table)
// table.print()
// console.log(table.get("enam"))
// console.log(table.remove("enam"))
table.print()