/**
 * @param {number[]} nums
 * @return {number[][]}
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 */

//  O(n**3) solution
var threeSum = function(nums) {
    let answer = [];
    let iLimit = nums.length-2;
    let jLimit = nums.length-1;
    let map = new Map();
    for(let i=0; i<iLimit; i++) {
        for(let j=i+1; j<jLimit; j++) {
            for(let k=j+1; k<nums.length; k++) {
                if(nums[i]+nums[j]+nums[k] === 0) {
                    let set = [nums[i],nums[j],nums[k]];
                    set.sort();
                    let key = ''+set[0]+set[1]+set[2];
                    map.set(key, set);
                }
            }
        }
    }
    map.forEach(element => {
        answer.push(element);
    });
    return answer;
};

let input = [-1, 0, 1, 2, -1, -4];
let result = threeSum(input);
let expected = [
    [-1, 0, 1],
    [-1, -1, 2]
];
console.log({input, result, expected});