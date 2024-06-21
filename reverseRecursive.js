let s = "hello"
function recursive(s){
    if(s.length<2){
        return s
    }
    return recursive(s.slice(1)) + s[0]
}
console.log(recursive(s))