// 3136. Valid Word

var isValid = function(word) {
    let obj = {}
    let vowel = {
        97 : true,
        101 : true,
        105 : true,
        111 : true,
        117 : true,
        65 : true,
        69 : true,
        73 : true,
        79 : true,
        85 : true
    }
    if(word.length<3){
        return false
    }
    for(let i=0;i<word.length;i++){
        if(!(word.charCodeAt(i) >= 48 && word.charCodeAt(i) <= 57) && !(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) && !(word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)){
            return false
        }
        if(vowel[word.charCodeAt(i)]){
            obj['vowel'] = true
        }
        if(!vowel[word.charCodeAt(i)] &&( (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) || (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)) ){
            obj['consonant'] = true
        }

    }
    if(Object.keys(obj).length === 2){
        return true
    }else{
        return false
    }
};