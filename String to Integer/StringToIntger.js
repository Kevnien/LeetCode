/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let INT_MAX = (2**31)-1;
    let INT_MIN = -1*(2**31);
    let newStr = '';
    let flag = true;
    let negative = false;
    for(let i=0; i<str.length; i++){
        if(flag && str[i] === ' ') {
            continue;
        }
        if(flag) {
            if(str[i]!=='-' && str[i]!=='+') {
                if(str[i]<'0' || str[i]>'9') {
                    return 0;
                }
            }else {
                if(str[i] === '-') {
                    negative = true;
                }
                flag = false;
                continue;
            }
            newStr += str[i];
            flag = false;
            continue;
        }
        if(str[i]<'0' || str[i]>'9') {
            break;
        }
        newStr += str[i];
    }
    let answer = 0;
    for(let i=0; i<newStr.length; i++) {
        answer += newStr[i]*(10**((newStr.length-1)-i));
    }
    if(negative) {
        answer *= -1;
    }
    if(answer > INT_MAX) {
        return INT_MAX;
    }
    if(answer < INT_MIN) {
        return INT_MIN;
    }
    return answer;
};
console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi("+-2"));
console.log(myAtoi("   +0 123"));