/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var left = head, right = head, tmp;

    while(--n && right.next) {
        right = right.next;
    }

    if (!right.next) {
        head = head.next;
        return head;
    }

    right = right.next;
    while(right.next) {
        right = right.next;
        left = left.next;
    }

    tmp = left.next;
    left.next = tmp.next;

    return head;
};
