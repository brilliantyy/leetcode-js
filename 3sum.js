/**
 * Beats 18.68 %
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    var results = [];
    var items = [];
    var len = nums.length;

    if (len < 3) return [];

    nums.sort(function(a,b) {

        return a<=b? -1:1;
    });


    for (var i = 0; i < len - 2; i++) {

        if (i != 0 && nums[i] === nums[i-1]) continue;

        for (var j = i + 1, k = len - 1; j < k;) {

            var value = nums[i] + nums[j] + nums[k];

            if (value === 0) {
                items.push(nums[i], nums[j], nums[k]);
                results.push(items);
                items = [];
                j++;
                while (nums[j] === nums[j-1]) {
                    j++;
                }
                k--;
                while (nums[k] === nums[k+1]) {
                    k--;
                }
            } else if (value > 0) {
                k--;
                while (nums[k] === nums[k+1]) {
                    k--;
                }
            } else {
                j++;
                while (nums[j] === nums[j-1]) {
                    j++;
                }
            }
        }
    }

    return results;
};
