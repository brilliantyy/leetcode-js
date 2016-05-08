/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length, times = 0;

    for (var i = 2; i < len; i++)
        if (nums[i] == nums[i - 2 - times]) times++;
        else nums[i - times] = nums[i];
    return len - times;
};
