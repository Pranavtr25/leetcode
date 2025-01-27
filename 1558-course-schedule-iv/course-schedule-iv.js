/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    let result = [];
    class Graph {
        constructor() {
            this.adjacents = {}
        }
        addVertex(v) {
            if (!this.adjacents[v]) {
                this.adjacents[v] = [];
            }
        }
        addEdge(v1, v2) {
            if (this.adjacents[v1]) {
                this.adjacents[v1].push(v2);
            }
        }
        DFS(v1, v2) {
            let visited = {}
            let adjacents = this.adjacents;
            let res = [];
            let flag = 0;
            function traversal(vertex1, vertex2) {
                if (!visited[vertex1]) {
                    visited[vertex1] = true;
                    res.push(vertex1);
                }
                adjacents[vertex1]?.forEach((v) => {
                    if (v == vertex2) {
                        flag = 1;
                        return true;
                    }
                    if (!visited[v]) {
                        traversal(v, v2);
                    }
                })
            }
            traversal(v1, v2);
            return flag ? true : false;
        }
    }
    const graph = new Graph()
    for (let i = 0; i < prerequisites.length; i++) {
        graph.addVertex(prerequisites[i][0]);
        graph.addEdge(prerequisites[i][0], prerequisites[i][1])
    }
    for (let i = 0; i < queries.length; i++) {
        result.push(graph.DFS(queries[i][0], queries[i][1]));
    }
    return result;
};