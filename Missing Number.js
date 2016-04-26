// a ^ b ^b = a
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var res = 0;
    for (var i = 0, len = nums.length; i < len; i++) {
        res = res ^ i ^ nums[i];
    }
    return res ^ i;
};
