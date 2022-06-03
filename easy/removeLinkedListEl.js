/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let prevPointer = new ListNode(-1);
  let currentPointer = prevPointer;
  prevPointer.next = head;
  while (head) {
    if (head.val === val) {
      prevPointer.next = head.next;
    } else {
      prevPointer = head;
    }
    head = head.next;
  }
  return currentPointer.next;
};
