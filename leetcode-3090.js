// 3090. Maximum Length Substring With Two Occurrences

var maximumLengthSubstring = function (s) {
  let i = 0;
  let maxLen = 0;
  while (i < s.length) {
    let freq = {};
    let len = 0;
    let j = i;
    while (j < s.length) {
      if (freq[s[j]]) {
        if (freq[s[j]] === 2) {
          break;
        } else {
          len++;
          freq[s[j]]++;
        }
      } else {
        len++;
        freq[s[j]] = 1;
      }
      j++;
    }
    if (len > maxLen) {
      maxLen = len;
    }
    i++;
  }
  return maxLen;
};
