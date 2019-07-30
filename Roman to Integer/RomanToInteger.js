/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let values = [1000, 500, 100, 50, 10, 5, 1];
    let answer = 0;
    let index = 0;
    let i = 0;
    while(s[i] === symbols[index]) {
        answer += 1000;
        i++;
    }
    index++;
    while(i<s.length) {
        if(s[i]===symbols[index] && s[i+1] === symbols[index-2] && index>1) {
            answer += values[index-2] - values[index];
            index++;
            i += 2;
        }else if(s[i]===symbols[index] && s[i+1] === symbols[index-1] && index>0) {
            answer += values[index-1] - values[index];
            index++;
            i+=2;
        }else {
            // console.log({i, symbol:symbols[index]});
            while(s[i] === symbols[index]) {
                answer += values[index];
                i++;
            }
            index++;
        }
    }
    return answer;
};

console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('D'));
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));