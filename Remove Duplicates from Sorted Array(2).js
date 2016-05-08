/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length, id = 1;
    if (len < 2) return len;

    for (var i = 1; i < len; i++) {
        if (nums[i] !== nums[i - 1]) nums[id++] = nums[i];
    }
    return id;
};
