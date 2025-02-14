/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    class MinHeap {
        constructor() {
            this.items = [];
        }
        insert(val) {
            this.items.push(val);
            let index = this.items.length - 1;
            while (index > 0) {
                let parentIndex = Math.floor((index - 1) / 2);
                let parentElement = this.items[parentIndex];
                if (this.items[index] >= this.items[parentIndex]) {
                    return this.items;
                }
                let temp = parentElement;
                this.items[parentIndex] = this.items[index];
                this.items[index] = temp;
                index = parentIndex;
            }
            return this.items
        }
        extractMin() {
            let removeVal = this.items[0];
            let length = this.items.length;
            let insertVal = this.items.pop();
            if (this.items.length < 1) {
                return removeVal;
            }
            this.items[0] = insertVal;
            let index = 0;
            while (true) {
                let sort;
                let element = this.items[0];
                let leftIndex = (index * 2) + 1;
                let rightIndex = (index * 2) + 2;

                if (leftIndex < length) {
                    if (this.items[leftIndex] < this.items[index]) {
                        sort = leftIndex;
                    }
                }
                if (rightIndex < length) {
                    if (!sort && this.items[rightIndex] < this.items[index] ||
                        sort && this.items[rightIndex] < this.items[leftIndex]
                    ) {
                        sort = rightIndex;
                    }
                }
                if (!sort) {
                    break;
                }
                let temp = this.items[index];
                this.items[index] = this.items[sort];
                this.items[sort] = temp;
                index = sort;
            }
            return removeVal;
        }
    }
    let count = 0;
    let flag = true;
    const heap = new MinHeap();
    for (let i = 0; i < nums.length; i++) {
        heap.insert(nums[i]);
    }
    while (flag) {
        flag = false;
        let min1 = heap.extractMin()
        let min2 = heap.extractMin()
        if (min1 >= k) {
            return count;
        }
        count++;
        flag = true;
        let insertVal = min1 * 2 + min2
        if (insertVal < k) {
            heap.insert(insertVal);
        }
        if (!heap.items.length) {
            return count;
        }
    }
};