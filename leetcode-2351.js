// 2351. First Letter to Appear Twice

var repeatedCharacter = function (s) {
    let freq = {}
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]]) {
            return s[i]
        } else {
            freq[s[i]] = 1
        }
    }
};