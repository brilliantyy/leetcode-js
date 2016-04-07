/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.forEach(function(value, index) {
        nums[index] = "" + value;
    });
    nums.sort(function(s1, s2) {
        if (s1 + s2 > s2 + s1) {
            return -1;
        } else if (s1 + s2 < s2 + s1) {
            return 1;
        } else {
            return 0;
        }
    });

    var result = nums.join("");
    if (nums[0] === '0' && nums.length > 0) result = '0';
    return result;
};
