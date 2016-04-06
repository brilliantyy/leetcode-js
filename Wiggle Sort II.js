/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    
    var len = nums.length;
    var mid = Math.floor((len-1)/2) + 1;
    var right = len;
    var temp = new Array(len);

    for(var i = 0; i<len; i++){
        temp[i] = (i%2 === 0) ? nums[--mid] : nums[--right];
    }

    for(var j = 0; j < len; j++){
        nums[j] = temp[j];
    }
};
