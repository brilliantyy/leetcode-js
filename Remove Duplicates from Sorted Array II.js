/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length, id = 1, times = 1;
    if (len < 3) return len;

    for (var i = 1; i < len; i++) {
        if (nums[i] === nums[i - 1] && times) {
            times--;
        } else if (nums[i] !== nums[i - 1]) {
            times = 1;
        } else {
            continue;
        }
        nums[id++] = nums[i];
    }

    return id;
};
