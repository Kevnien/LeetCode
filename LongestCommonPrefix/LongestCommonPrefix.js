/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let index = 0;
    let flag = true;
    if(strs.length < 2){
        if(strs.length === 1) {
            return strs[0];
        }
        return '';
    }
    while(flag) {
        if(strs[0][index] === undefined) {
            break;
        }
        for(let i=1; i<strs.length; i++) {
            if(strs[0][index] !== strs[i][index] || strs[i][index] === undefined) {
                flag = false;
                break;
            }
        }
        if(flag) {
            prefix += strs[0][index++];
        }else {
            break;
        }
    }
    return prefix;
};
let input = ["flower","flow","flight"];
let result = longestCommonPrefix(input);
let expected = "fl";
// let input = [];
// let result = longestCommonPrefix(input);
// let expected = "";
// let input = [""];
// let result = longestCommonPrefix(input);
// let expected = "";
// let input = ["",""];
// let result = longestCommonPrefix(input);
// let expected = "";
console.log({input, result, expected});