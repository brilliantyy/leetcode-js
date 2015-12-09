/**
 * Beats 41.38 %
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var results = [];
    var items = [];
    var len = nums.length;

    if (len < 4) return [];

    nums.sort(function(a,b) {

        return a<=b? -1:1;
    });

    for (var i = 0; i < len - 3; i++) {

        if (i != 0 && nums[i] === nums[i-1]) continue;

        for (var j = i + 1; j < len - 2; j++) {

            if (j != i+1 && nums[j] === nums[j - 1]) continue;

            for (var k = j + 1, l = len - 1; k < l;) {

                var value = nums[i] + nums[j] + nums[k] + nums[l];

                if (value === target) {

                    items.push(nums[i], nums[j], nums[k], nums[l]);
                    results.push(items);
                    items = [];
                    k++;
                    while (nums[k] === nums[k-1]) {
                        k++;
                    }

                    l--;
                    while (nums[l] === nums[l+1]) {
                        l--;
                    }

                } else if (value > target) {

                    l--;
                    while (nums[l] === nums[l+1]) {
                        l--;
                    }

                } else {

                    k++;
                    while (nums[k] === nums[k-1]) {
                        k++;
                    }

                }
            }
        }
    }

    return results;
};
