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

/**
 * Beats 52.63 %
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length;
    if (len == 0) {
        return 0;
    }

    for (var i = 0, j = i + 1; j < nums.length;) {
        if (nums[i] != nums[j]) {
            if (j != i+1) {
                nums[i+1] = nums[j];
            }

            i++;
            j++;

        } else {
            j++;
        }

    }
    return i+1;
};
