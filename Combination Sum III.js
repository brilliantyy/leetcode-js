/**
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Ensure that numbers within the set are sorted in ascending order.

Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var res = [], comb = [];

    generate(k, n, 1, comb, res);
    return res;
};
var generate = function(k, n, start, comb, res) {
    if (comb.length === k && n === 0) {
        var ans = comb.concat();
        res.push(ans);
        return;
    }
    for (var i = start; i <= 9; i++) {
        comb.push(i);
        generate(k, n - i, i + 1, comb, res);
        comb.pop();
    }
}
