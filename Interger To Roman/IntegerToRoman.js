/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I']; // length: 7
    let values = [1000, 500, 100, 50, 10, 5, 1];
    let answer = '';
    let index = 0;
    while(num > 0) {
        let currentValue = values[index];
        let amount = (num/currentValue)|0;
        if(amount > 0) {
            for(let i=0; i<amount; i++) {
                answer += symbols[index];
            }
            num -= amount*values[index];
        }else {
            let nextIndex = index+2-(index%2);
            let value = values[index] - values[nextIndex];
            if(index < 6 && (value/(num-(num%value))) === 1) {
                answer += symbols[nextIndex]+symbols[index];
                num -= value;
                continue;
            }else {
                index++;
            }
        }
    }
    return answer;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(1994));