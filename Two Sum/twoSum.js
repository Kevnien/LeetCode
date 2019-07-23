/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    map.set(nums[0], 0);
    for(let index=1; index<nums.length; index++){
        let element = nums[index];
        let other = map.get(target-element);
        if((typeof other) === 'number') {
            return [other, index];
        }
        map.set(element, index);
    }
};

let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums, target));