/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var ss = s.split(""), len = ss.length, head = 0, tail = len - 1;

    for (; head < tail; head++, tail--) {
        while(!isVowel(ss[head]) && head < len) {
            head++;
        }
        while(!isVowel(ss[tail]) && tail >= 0) {
            tail--;
        }
        if (head < tail) {
            if (ss[head] == ss[tail]) {
                continue;
            }
            swap(ss, head, tail);
        } else {
            break;
        }
    }

    return ss.join("");
};

var isVowel = function(c) {
    if (['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'].indexOf(c) !== -1) {
        return true;
    }
    return false;
}

var swap = function(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}
