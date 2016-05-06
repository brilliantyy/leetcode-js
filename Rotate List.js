/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || head.next === null || k === 0) return head;
    var first = head, second = head, len= 1, newHead = head;

    while(newHead.next) {
        newHead = newHead.next;
        len++;
    }

    k = k % len;

    if (k === 0) return head;

    while(k--) {
        second = second.next;
    }

    while (second.next) {
        first = first.next;
        second = second.next;
    }
    newHead = first.next;
    second.next = head;
    first.next = null;
    return newHead;
};
