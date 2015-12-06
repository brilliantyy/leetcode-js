/**
 * Beats 24.05 %
 * Given an array of integers and an integer k,
 * find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j]
 * and the difference between i and j is at most k.
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    var set = new Set();
    var start = 0, end = 0;

    for (var i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
            end++;
        } else {
            return true;
        }

        if (end - start > k) {
            set.delete(nums[start]);
            start++;
        }
    }
    return false;
};
