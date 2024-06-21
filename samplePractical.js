let s1 = "bank"
let s2 = "kanb"
s1=s1.split("")
s2=s2.split("")
for (let i = 0; i < s1.length-1; i++) {
    for (let j=i+1; j < s1.length; j++) {
        let str=[]
        for (let k = 0; k < s1.length; k++) {
            str.push(s1[k])
        }
        let temp = str[i];
        str[i]=str[j];
        str[j]=temp
        console.log(str)
        console.log(s2)

        for (let i = 0; i < str.length; i++) {
            if(str[i]!==s2[i]){
                console.log(false)
            }            
        }
        console.log(true)
    }    
}