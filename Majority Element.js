/**
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * Beats 25.2 %
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    var len = nums.length;
    var distance = Math.floor(len / 2);

    if (len == 1) return nums[0];

    for(var i = 0; i < len; i++) {
        if (nums[i] === nums[i + distance]) {
            return nums[i];
        }
    }

};
