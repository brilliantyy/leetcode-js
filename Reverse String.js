/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var len = s.length, left = 0, right = len - 1;
    if (len <= 1) {
        return s;
    }
    s = s.split('');
    while(left < right) {
        swap(s, left, right);
        left++;
        right--;
    }
    return s.join('');
};

var swap = function(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}
