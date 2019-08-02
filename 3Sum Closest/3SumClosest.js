/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let sort = function(array) {
        array.sort((a, b) => {
            return a-b;
        });
        let newArray = [];
        let i = 0;
        for(;array[i]<0; i++) {
            newArray.unshift(array[i]);
        }
        for(;i<array.length; i++) {
            newArray.push(array[i]);
        }
        return array;
    }
    nums = sort(nums);
    let limit = nums.length - 2;
    let map = new Map();
    for(let i=0; i<limit; i++) {
        let j = i+1;
        let k = nums.length - 1;
        while(j < k) {
            let sum = nums[i]+nums[j]+nums[k];
            map.set(sum, [nums[i],nums[j],nums[k]]);
            if(sum === target) {
                return target;
            }else if(sum < target) {
                j++;
            }else {
                k--;
            }
        }
    }
    let iterator = map.entries();
    let entry = iterator.next().value;
    let difference = 0;
    for(;;) {
        while(entry !== undefined) {
            if(entry[0] === target+difference || entry[0] === target-difference){
                let sum = entry[1].reduce((accu, curr) => {
                    return accu + curr;
                });
                // console.log({newTarget:target+difference, result:entry[1], sum});
                return sum;
            }
            entry = iterator.next().value;
        }
        iterator = map.entries();
        entry = iterator.next().value;
        difference++;
    }
};

// let input = {nums:[-1, 2, 1, -4], target:1};
// let result = threeSumClosest(input.nums, input.target);
// let expected = [-1, 2, 1];
// let input = {nums:[0,1,2], target:3};
// let result = threeSumClosest(input.nums, input.target);
// let expected = 3;
let input = {nums:[1,2,4,8,16,32,64,128], target:82};
let result = threeSumClosest(input.nums, input.target);
let expected = 82;
console.log({input, result, expected});