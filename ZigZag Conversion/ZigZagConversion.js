/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let answer = '';
    let rows = [];
    for(let i=0; i<numRows; i++) {
        rows.push('');
    }
    let reverse = numRows - 2;
    let cap = numRows + reverse;
    if(numRows < 3) {
        cap = numRows;
    }
    for(let i=0; i<s.length; i++) {
        let remainder = i % cap;
        if(remainder < numRows) {
            rows[remainder] += s[i];
        }else {
            rows[(numRows-2)-(remainder-numRows)] += s[i];
        }
    }
    for(let i=0; i<rows.length; i++) {
        answer += rows[i];
    }
    return answer;
};

let string = 'A';
console.log(convert(string, 1));
console.log('A');