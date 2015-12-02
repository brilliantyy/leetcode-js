/**
 * Beats 48.08 %
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    var len = nums.length;

    if (k < len) {
        nums.reverse();
        for(var i = 0; i < k / 2; i++) {
            var temp = nums[i];
            nums[i] = nums[k-i-1];
            nums[k-i-1] = temp;
        }

        for(i = k; i < (len + k) / 2; i++) {
            temp = nums[i];
            nums[i] = nums[len-i+k-1];
            nums[len-i+k-1] = temp;
        }
    } else if (k > len) {
        rotate(nums, k - len);
    } else {

    }
};


/**
 * Need another two methods !
 *
 */
