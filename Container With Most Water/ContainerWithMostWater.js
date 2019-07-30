/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let largestArea=0, l=0, r=height.length-1, left=0, right=0;
    while(l < r) {
        let h = 0;
        left=l;
        right=r;
        if(height[l] < height[r]) {
            h = height[l];
            l++
        }else {
            h = height[r];
            r--;
        }
        let area = (right-left)*h;
        if(largestArea < area) {
            largestArea = area;
        }
    }
    return largestArea;
};

let heights = [1,1];
let expected = 1;
// let heights = [1,8,6,2,5,4,8,3,7];
// let expected = 49;
let result = maxArea(heights);
console.log({result, expected});