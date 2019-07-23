/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = 0;
    let map = new Map();
    let i=0;
    let j=0;
    while(j < s.length && i < s.length) {
        if(map.has(s[j])) {
            map.delete(s[i]);
            let length = j-i;
            if(length > answer){
                answer = length;
            }
            i++;
            continue;
        }
        map.set(s[j++], null);
    }
    let length = j-i;
    if(length > answer){
        answer = length;
    }
    return answer;
};

let input1 = "abcabcbb";
console.log(lengthOfLongestSubstring(input1));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));