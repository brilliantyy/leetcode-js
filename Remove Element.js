/**
 * Beats 16.5 %
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    var newLength;

    for (var i = 0; i < nums.length; i++) {

        if (nums[i] === val) {

            if (i < nums.length - 1) {
                for (var j = i + 1; j < nums.length; j++) {
                    if (nums[j] != val) {

                        nums[i] = nums[j];
                        if (j < nums.length - 1) {
                            for (var k = j+1; k < nums.length; k++) {
                                nums[k-1] = nums[k];
                            }
                        }

                        nums.length--;
                        break;
                    } else if (j == nums.length - 1) {
                        i--;
                        nums.length--;
                        break;
                    } else {

                    }
                }

            } else {
                nums.length--;
            }

        }
    }

    return nums.length;
};
