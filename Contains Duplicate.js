/**
 * Beats 34.30 % 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort(function(a,b) {
        return (a > b)? 1 : -1;
    });
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i+1]) {
            return true;
        }
    }
    
    return false;
};