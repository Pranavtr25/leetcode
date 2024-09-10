/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let curr = head;
    while(curr.next){
        let nextNode = curr.next;
        let min = Math.min(curr?.val, nextNode?.val)
        let insertVal;
        for(let i=min;i>=0;i--){
            if(curr?.val % i === 0 && nextNode?.val % i === 0){
                insertVal = i;
                break;
            }
        }
        const insertNode = new ListNode(insertVal)
        curr.next = insertNode;
        insertNode.next = nextNode
        curr = curr.next?.next
    }
    return head;
};