//  1791. Find Center of Star Graph

var findCenter = function(edges) {
    let obj = {}
    obj[edges[0][0]] = true
    obj[edges[0][1]] = true
    if(obj[edges[1][0]]){
        return edges[1][0]
    }else if(edges[1][1]){
        return edges[1][1]
    }
};