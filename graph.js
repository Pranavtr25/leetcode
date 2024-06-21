class Graph{
    constructor(){
        this.adjacentlist = {}
    }

    addVertex(vertex){
        if(!this.adjacentlist[vertex]){
            this.adjacentlist[vertex] = []
        }
    }

    addEdge(v1,v2){
        if(this.adjacentlist[v1] && this.adjacentlist[v2]){
            this.adjacentlist[v1].push(v2)
            this.adjacentlist[v2].push(v1)
        }
    }

    removeEdge(v1,v2){
        if(this.adjacentlist[v1] && this.adjacentlist[v2]){
            this.adjacentlist[v1] = this.adjacentlist[v1].filter(v => v!==v2)
            this.adjacentlist[v2] = this.adjacentlist[v2].filter(v => v!==v1)
        }
    }

    // removeEdge(v1,v2){
    //     if(this.adjacentlist[v1] && this.adjacentlist[v2]){
    //         for(let i=0;i<this.adjacentlist[v1].length;i++){
    //             if(this.adjacentlist[v1][i] === v2){
    //                 this.adjacentlist[v1].splice(i,1)
    //             }
    //         }
    //         for(let i=0;i<this.adjacentlist[v2].length;i++){
    //             if(this.adjacentlist[v2][i] === v1){
    //                 this.adjacentlist[v2].splice(i,1)
    //             }
    //         }
    //     }
    // }

    removeVertex(vertex){
            while(this.adjacentlist[vertex].length){
                const removeVertex = this.adjacentlist[vertex].pop()
                this.removeEdge(vertex,removeVertex)
            }
            delete this.adjacentlist[vertex]
    }

    // DFSRecursive(vertex){
    //     let result =[]
    //     let visited = {}
    //     let adjacentlist = this.adjacentlist
    //     function traversal(vertex){
    //         if(!adjacentlist[vertex]){
    //             return null
    //         }
    //         result.push(vertex)
    //         visited[vertex] = true
    //         adjacentlist[vertex].forEach(neighbour => {
    //             if(!visited[neighbour]){
    //                 return traversal(neighbour)
    //             }
    //         });
    //     }
    //     traversal(vertex)
    //     return result
    // }

    DFSRecursive(vertex){
        if(!this.adjacentlist[vertex]){
            return null
        }
        let result = []
        let visited = {}
        let adjacentlist = this.adjacentlist
        function traversal(vertex){
            if(!visited[vertex]){
                result.push(vertex)
                visited[vertex] = true
            }
            adjacentlist[vertex].forEach(adjacent => {
                if(!visited[adjacent]){
                    traversal(adjacent)
                }
            })
        }
        traversal(vertex)
        return result
    }

    DFSIterative(start){
        let stack = [start]
        let visited ={}
        let result = []
        visited[start] = true
        while(stack.length){
            let value = stack.pop()
            result.push(value)
            this.adjacentlist[value].forEach(adjacent => {
                if(!visited[adjacent]){
                    stack.push(adjacent)
                    visited[adjacent] = true
                }
            })
        }
        return result
    }

    BFSIterative(start){
        if(!this.adjacentlist[start]){
            return null
        }
        let queue = [start]
        let result = []
        let visited = {}
        visited[start] = true
        while(queue.length){
            let value = queue.shift()
            result.push(value)
            visited[value] = true
            this.adjacentlist[value].forEach(adjacent => {
                if(!visited[adjacent]){
                    queue.push(adjacent)
                    visited[adjacent] = true
                }
            })
        }
        return result
    }

}


const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")
console.log(graph)
console.log(graph.DFSRecursive("A"))
console.log(graph.DFSIterative("A"))
console.log(graph.BFSIterative("A"))
// graph.removeEdge("india","australia")
// console.log(graph)
// graph.removeVertex("england")
// console.log(graph)