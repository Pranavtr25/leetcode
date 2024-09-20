/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr1 = head;
    let count = 0;
    while(curr1?.val !== undefined){
        count++;
        curr1 = curr1.next;
    }
    count++;
    
    let removeCount = 0;
    let curr2 = head
    let node = new ListNode(0, head);
    let prev = node
    console.log(JSON.stringify(node))
    while(curr2?.val !== undefined){
        removeCount++;
        if(count - n === removeCount){
            prev.next = prev.next?.next
            return node.next;
        }
        curr2 = curr2.next
        prev = prev.next
    }

};