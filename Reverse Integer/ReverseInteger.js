/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let answer = 0;
    let INT_MAX = (2**31)-1;
    let INT_MIN = -1*(2**31);
    while(x !== 0) {
        let pop = x %10;
        x = x/10 | 0;
        if(answer>INT_MAX/10 || (answer===INT_MAX/10 && pop>7)) {
            return 0;
        }
        if(answer<INT_MIN/10 || (answer===INT_MIN && pop<-8)) {
            return 0;
        }
        answer = answer*10 + pop;
    }
    return answer;
};

let number1 = 123;
console.log(reverse(number1));
let number2 = -123;
console.log(reverse(number2));
let number3 = 1534236469;
console.log(reverse(number3));
let number4 = -2147483648;
console.log(reverse(number4));