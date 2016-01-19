/**
 * Beats 28.57%
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var len = nums.length;
    nums.sort(compare);
    for (var i = 0; i < len; i+=3) {
        if (nums[i] !== nums[i+1])
            return nums[i];
    }
};

var compare = function(a, b) {
    return a >= b ? 1 : -1;
}
