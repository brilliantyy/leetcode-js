/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * Note:
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold
 * additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
 * Beats 17.65 %
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    if (n == 0 && m) {
        return;
    } else if (m == 0 && n) {
        for (var i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    } else if (m == 0 && n == 0) {
        return;
    } else {

        for (var i = m + n - 1, j = m - 1, k = n - 1; i >= 0; i--) {
            if (j < 0 && k >= 0) {
                for(; k >= 0; k--) {
                    nums1[k] = nums2[k];
                }
                break;
            } else if (j >= 0 && k < 0) {
                break;
            } else {

                if (nums1[j] >= nums2[k]) {
                    nums1[i] = nums1[j];
                    j--;
                } else {
                    nums1[i] = nums2[k];
                    k--;
                }
            }
        }
    }
};
