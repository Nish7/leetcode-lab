// Approiach: Keep a track of the min-heap with lenghth of the k
// shift removing from the start
// push the element
// sort the min heap
// if the size of the min heap > k. then remove the first elemet [shift]; accomodate the larger elements
// Example:
// [4, 5, 8]
// [5, 5, 8]
class KthLargest {
    k: number
    minHeap: number[]
    constructor(k: number, nums: number[]) {
        this.k = k
        this.minHeap = nums.sort((a, b) => b - a).slice(0, k)
    }

    add(val: number): number {
        // [8,5,4], add = 2
        // [8,5,4], add = 5
        // [8,5,4], add = 10
        let i = 0
        while (i < this.minHeap.length && this.minHeap[i] > val) i++ // can be done in a binary log
        this.minHeap.splice(i, 0, val)
        if (this.minHeap.length > this.k) this.minHeap.pop()
        return this.minHeap.at(-1)!
    }
}
