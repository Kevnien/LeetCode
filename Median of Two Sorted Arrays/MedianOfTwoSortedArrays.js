/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    let halfLen = ((nums1.length+nums2.length+1)/2)|0;
    let iMin = 0;
    let iMax = nums1.length;
    while(iMin <= nums1.length) {
        let i = ((iMin+iMax)/2)|0;
        let j = halfLen - i;
        if(i<iMax && nums2[j-1]>nums1[i]) {
            iMin = i+1;
        }else if(i>iMin && nums1[i-1]>nums2[j]) {
            iMax = i-1;
        }else {
            let maxLeft = 0;
            if(i === 0) {
                maxLeft = nums2[j-1];
            }else if(j === 0) {
                maxLeft = nums1[i-1];
            }else {
                if(nums1[i-1] > nums2[j-1]) {
                    maxLeft = nums1[i-1];
                }else {
                    maxLeft = nums2[j-1];
                }
            }
            if((nums1.length+nums2.length)%2 === 1) {
                return maxLeft;
            }
            let minRight = 0;
            if(i === nums1.length) {
                minRight = nums2[j];
            }else if(j === nums2.length) {
                minRight = nums1[i];
            }else {
                if(nums1[i] > nums2[j]) {
                    minRight = nums2[j];
                }else {
                    minRight = nums1[i];
                }
            }
            console.log("maxLeft: "+maxLeft+"\tminRight: "+minRight);
            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0.0;
};

console.log(findMedianSortedArrays([1,3],[2]));