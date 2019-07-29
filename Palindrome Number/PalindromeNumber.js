/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    let number = x;
    let digits = 0;
    while(number > 0) {
        number = number/10 | 0;
        digits++;
    }
    while(digits>1) {
        let right = x%10;
        let left = x/(10**(--digits)) | 0;
        left = left%10;
        // console.log({right, left, digits, x});
        if(right !== left) {
            return false;
        }
        x = x/10 | 0;
        digits--;
    }
    return true;
};

console.log("121 " + isPalindrome(121));
console.log("-121 " + isPalindrome(-121));
console.log("10 " + isPalindrome(10));
console.log("1000021 " + isPalindrome(1000021));
console.log("9999 " + isPalindrome(9999));