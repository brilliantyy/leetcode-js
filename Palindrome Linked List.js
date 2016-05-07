/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    var slow = head, fast = head, tmp, arr1 = [], arr2 = [], i, j;

    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    tmp = slow.next;
    while(tmp) {
        arr1.push(head.val);
        arr2.push(tmp.val);
        head = head.next;
        tmp = tmp.next;
    }
    var len = arr2.length;
    // arr2.reverse();
    for (i = 0, j = len - 1; i < len; i++, j--) {
        if (arr1[i] !== arr2[j]) {
            return false;
        }
    }
    return true;
};
