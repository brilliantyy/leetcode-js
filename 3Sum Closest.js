/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length <= 3) {
        var s = 0;
        for (var i = 0, l = nums.length; i < l; i++) {
            s += nums[i];
        }
        return s;
    }

    nums.sort(function(a, b) {
        return a - b;
    });
    var sum = 0, ans = nums[0] + nums[1] + nums[2], len = nums.length, j, k;

    for (var i = 0; i < len - 2; i++) {
        j = i + 1,
        k = len - 1;
        while (j < k) {
            sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(target - sum) < Math.abs(target - ans)) {
                ans = sum;
                if (target === ans) {
                    return ans;
                }
            }
            (sum > target) ? k-- : j++;
        }
    }
    return ans;
};
