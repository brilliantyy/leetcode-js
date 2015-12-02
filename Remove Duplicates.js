/**
 * Time Limit Exceeded
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    for (var i = 0; i < nums.length; i++) {

        for (var j = nums.length - 1; j > i; j--) {
            if (nums[j] === nums[i]) {
                var distance = j - i;
                for (var k = j + 1; k < nums.length; k++) {
                    nums[k - distance] = nums[k];
                }
                nums.length -= distance;
                break;
            }
        }
    }
};
