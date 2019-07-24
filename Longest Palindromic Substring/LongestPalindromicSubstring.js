/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';
    for(let i=0; i<s.length; i++) {
        let current = s[i];
        let j = i-1;
        let k= i+1;
        if(s[i] === s[i+1]) {
            let current2 = current + s[i];
            current2 = getPalindrome(s, current2, j, k+1);
            if(current2.length > longest.length){
                longest = current2;
            }
        }
        current = getPalindrome(s, current, j, k);
        if(current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
};

let getPalindrome = function(s, current, j, k) {
        while(j>=0 && k<s.length) {
            if(s[j] !== s[k]) {
                j--;
                k++;
                break;
            }
            current = s[j--] + current + s[k++];
        }
    return current;
}