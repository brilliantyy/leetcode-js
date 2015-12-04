/**
 * Beats 50.88 %
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    var len = nums.length;
    var firstZero = null;
    var firstNoneZero = null;

    for(var i = 0; i < len; i++) {

        if (nums[i] == 0 && firstZero == null) {
            firstZero = i;
        }
    }
    for(i = firstZero + 1; i < len; i++) {
         if (nums[i] != 0 && firstNoneZero == null) {
            firstNoneZero = i;
        }
    }
    if (firstZero != null && firstNoneZero != null) {
        for(var i = firstZero, j = firstNoneZero; i < len, j < len;) {

            if (!nums[i] && nums[j]) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;

                i++;
                j++;
            } else if (nums[i]) {

            } else if (!nums[j]) {
                j++;
            }


        }
    }
};
