/**
 * Beats 70.00 %
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    var start = 0;
    var end = nums.length - 1;
  
    var leftPos = binarySearch(nums, start, end, target, 1);
    var rightPos = binarySearch(nums, start, end, target, 0);
    
    return [leftPos, rightPos];
};

var binarySearch = function binarySearch(nums, start, end, target, part) {
    
    if (start > end)
        return -1;
    
    var mid = Math.floor((start + end) / 2);
    
    if (nums[mid] == target) {
        var pos = part ? binarySearch(nums, start, mid - 1, target, part) : binarySearch(nums, mid + 1, end, target, part);
        return pos == -1 ? mid : pos;
    } else if (nums[mid] > target) {
        return binarySearch(nums, start, mid - 1, target, part);
    } else {
        return binarySearch(nums, mid + 1, end, target, part);
    }
    
}