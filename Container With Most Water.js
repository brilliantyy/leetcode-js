/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length <= 1) return 0;
    var maxArea = 0, len = height.length, low = 0, high = len - 1, minHeight = 0;

    while(low < high) {
        minHeight = Math.min(height[low], height[high]);
        maxArea = Math.max(maxArea, minHeight * (high - low));
        while(height[low] <= minHeight && low < high) {
            low++;
        }
        while(height[high] <= minHeight && low < high) {
            high--;
        }
    }
    return maxArea;
};
