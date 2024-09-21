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
    // if(curr1?.val < curr2?.val){
    //     while(curr1?.val !== undefined){
    //         if(curr2.val !== undefined){
    //             if(curr1?.val < curr2?.val){
    //                 curr.next = new ListNode(curr1.val)
    //                 curr.next.next = new ListNode(curr2.val)
    //             }else{
    //                 curr.next = new ListNode(curr2.val)
    //                 curr.next.next = new ListNode(curr1.val)
    //             }
    //             curr = curr.next.next
    //             curr1 = curr1.next
    //             curr2 = curr2.next
    //         }else{
    //             curr.next = new ListNode(curr1.val)
    //             curr = curr.next
    //             curr1 = curr1.next
    //         }
    //     }
    // }else{
    //     while(curr2?.val !== undefined){
    //         if(curr1?.val !== undefined){
    //             if(curr2?.val < curr1?.val){
    //                 curr.next = new ListNode(curr2.val)
    //                 curr.next.next = new ListNode(curr1.val)
    //             }else{
    //                 curr.next = new ListNode(curr1.val)
    //                 curr.next.next = new ListNode(curr2.val)
    //             }
    //             curr = curr.next.next
    //             curr1 = curr1.next
    //             curr2 = curr2.next
    //         }else{
    //             curr.next = new ListNode(curr2.val)
    //             curr = curr.next
    //             curr2 = curr2.next
    //         }
    //     }
    // }
    // while(curr1?.val !== undefined){
    //     curr.next = new ListNode(curr1.val)
    //     curr1 = curr1.next
    //     curr = curr.next
    // }
    // while(curr2?.val !== undefined){
    //     curr.next = new ListNode(curr2.val)
    //     curr2 = curr2.next
    //     curr = curr.next
    // }
    // console.log(JSON.stringify(res))
    // return res.next


    while(curr1?.val !== undefined && curr2?.val !== undefined){
        if(curr1?.val < curr2?.val){
            curr.next = new ListNode(curr1.val)
            // curr.next.next = new ListNode(curr2.val)
            curr1 = curr1.next
        }else{
            curr.next = new ListNode(curr2.val)
            curr2 = curr2.next
            // curr.next.next = new ListNode(curr1.val)
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