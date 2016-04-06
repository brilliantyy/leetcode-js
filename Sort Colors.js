/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (!nums || nums.length === 0) return;
    sort(nums, 0, nums.length - 1);
};

var sort = function(array, low, high) {
    var lt = low, gt = high;
    var i = low + 1;
    var target = array[low];

    if (high <= low) return;
    while (i <= gt) {
        if (array[i] < target) {
            exchange(array, i++, lt++);
        } else if (array[i] > target) {
            exchange(array, i, gt--);
        } else {
            i++;
        }
    }
    sort(array, low, lt - 1);
    sort(array, gt + 1, high);
}
var exchange = function(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
