/**
 * Beats 15.00 %
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var index1;
    var index2;
    var result = [];
    
    for(var i = 0; i < nums.length; i++) {
        index1 = i + 1;
        for(var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                index2 = j + 1;
                return [index1, index2];
            }
        }
    }
};