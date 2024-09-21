/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let res = new ListNode(0);
    let curr = res;
    let curr1 = list1
    let curr2 = list2
    while(curr1?.val !== undefined && curr2?.val !== undefined){
        if(curr1?.val < curr2?.val){
            curr.next = new ListNode(curr1.val)
            curr1 = curr1.next
        }else{
            curr.next = new ListNode(curr2.val)
            curr2 = curr2.next
        }
        curr = curr.next
    }
    while(curr1?.val !== undefined){
        curr.next = new ListNode(curr1.val)
        curr1 = curr1.next
        curr = curr.next
    }
    while(curr2?.val !== undefined){
        curr.next = new ListNode(curr2.val)
        curr2 = curr2.next
        curr = curr.next
    }
    return res.next;
};