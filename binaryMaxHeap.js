// class BinaryMaxHeap{
//     constructor(){
//         this.items = []
//     }

//     insert(val){
//         this.items.push(val)
//         let index = this.items.length - 1
//         let value = this.items[index]
//         while(index>0){
//             let parentIndex = Math.floor((index - 1) / 2)
//             let parentValue = this.items[parentIndex]
//             if(value < parentValue){
//                 break
//             }
//             this.items[parentIndex] = value
//             this.items[index] = parentValue
//             index = parentIndex
//         }
//         return this.items
//     }

// extractMax(){
//     let removedVal = this.items[0]
//     let length = this.items.length
//     let insertVal = this.items.pop()
//     if(!this.items.length){
//         return removedVal
//     }
//     this.items[0] = insertVal
//     let element = this.items[0]
//     let elementIndex = 0
//     while(true){
//         let swap
//         let leftIndex = (elementIndex * 2) + 1
//         let rightIndex = (elementIndex * 2) + 2
//         if(leftIndex<length){
//             if(this.items[leftIndex]>element){
//                 swap = leftIndex
//             }
//         }

//         if(rightIndex < length){
//             if( (!swap && this.items[rightIndex]>element) || (swap && this.items[rightIndex] > this.items[leftIndex]) ){
//                 swap = rightIndex
//             }
//         }

//         if(!swap){
//             break;
//         }
//         let temp = this.items[elementIndex]
//         this.items[elementIndex] = this.items[swap]
//         this.items[swap] = temp
//         elementIndex = swap
//     }
//     return removedVal
// }
// }

// const heap = new BinaryMaxHeap()
// console.log(heap.insert(4))
// console.log(heap.insert(56))
// console.log(heap.insert(7))
// console.log(heap.insert(45))
// console.log(heap.insert(34))
// console.log(heap.insert(12))
// console.log(heap.insert(55))
// console.log(heap.extractMax())
// console.log(heap.extractMax())
// console.log(heap.extractMax())
// console.log(heap.extractMax())
// console.log(heap.items)

class BinaryMaxHeap {
  constructor() {
    this.items = [];
  }

  insert(value) {
    this.items.push(value);
    let index = this.items.length - 1;
    let size = this.items.length;
    while (index > 0) {
      let element = this.items[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.items[parentIndex];
      if (element < parentElement) {
        return this.items;
      }
      this.items[parentIndex] = element;
      this.items[index] = parentElement;
      index = parentIndex;
    }
    return this.items;
  }

  extractMax() {
    const popVal = this.items[0];
    const insertVal = this.items.pop();
    const size = this.items.length;
    if (!this.items.length) {
      return this.items;
    }
    this.items[0] = insertVal;
    let index = 0;
    while (true) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      let swap;
      if (leftIndex < size) {
        if (this.items[leftIndex] > this.items[index]) {
          swap = leftIndex;
        }
      }
      if (rightIndex < size) {
        if (
          (!swap && this.items[rightIndex] > insertVal) ||
          (swap && this.items[rightIndex] > this.items[leftIndex])
        ) {
          swap = rightIndex;
        }
      }
      if (!swap) {
        break;
      }
      let temp = this.items[index];
      this.items[index] = this.items[swap];
      this.items[swap] = temp;
      index = swap;
    }
    return this.items;
  }
}

const heap = new BinaryMaxHeap();
console.log(heap.insert(3));
console.log(heap.insert(68));
console.log(heap.insert(8));
console.log(heap.insert(99));
console.log(heap.insert(55));
console.log(heap.insert(69));
console.log(heap.extractMax());
