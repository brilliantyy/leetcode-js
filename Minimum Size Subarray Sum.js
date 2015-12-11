/**
 * Beats 25.00 %
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    
    var start = 0;
    var end = 0;
    var sum = 0;
    var min = Number.MAX_VALUE;
    var len = nums.length;
    
    while (start < len && end < len) {
        
        while (sum < s && end < len) {
            sum += nums[end++];
        }
        
        while (sum >= s && start < len) {
            min = Math.min(min, end - start);
            sum -= nums[start++];
        }
    }
    
    return min == Number.MAX_VALUE ? 0 : min;
};