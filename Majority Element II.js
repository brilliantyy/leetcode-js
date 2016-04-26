/**
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.
 * Boyer-Moore Majority Vote algorithm
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var count1 = 0, count2 = 0, candidate1 = 0, candidate2 = 1, res = [];
    nums.forEach(function(val) {
        if (val === candidate1) {
            count1++;
        } else if (val === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = val;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = val;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    });

    count1 = count2 = 0;
    nums.forEach(function(val) {
        if (val === candidate1) {
            count1++;
        } else if (val === candidate2) {
            count2++;
        }
    });

    if (count1 > Math.floor(nums.length / 3)) {
        res.push(candidate1);
    }
    if (count2 > Math.floor(nums.length / 3)) {
        res.push(candidate2);
    }
    return res;
}
