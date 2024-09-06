/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {

    function deleteNodes(nums, list) {
        nums = new Set(nums)
        let dummy = new ListNode(0)
        dummy.next = list
        let curr = dummy
        while (curr.next) {
            if (nums.has(curr.next.val)) {
                curr.next = curr.next.next
            } else {
                curr = curr.next
            }
        }
        return dummy.next
    }

    return deleteNodes(nums, head)
    
};