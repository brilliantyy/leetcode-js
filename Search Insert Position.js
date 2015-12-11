/**
 * Beats 77.55 %
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    var low = 0;
    var high = nums.length - 1;
    var middle = 0;
    var pos;
    
    while (low <= high) {
        middle = Math.floor((low + high) / 2); 
        
        if (nums[middle] == target) {
            return middle;
        } else if (nums[middle] < target) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
        
    }
    
    return low;
    
};