/**
 * Beats 19.05 %
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var result = [];
    var start = nums[0];
    var end;

    for (var i = 0, j = i + 1; i < nums.length;) {

        if (nums[j] != nums[i] + 1) {
            end = nums[i];
            i = j;
            j++;

            if (start != end) {
                result.push( start + '->' + end );
            } else {
                result.push(start.toString());
            }
            start = nums[i];
        } else {
            i++;
            j++;
        }
    }

    return result;
};
