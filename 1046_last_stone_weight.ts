function lastStoneWeight(stones: number[]): number {
    let heap = new WeightHeap(stones)
    while (heap.length() > 1) {
        let a = heap.shift()
        let b = heap.shift()
        let abs = Math.abs(a - b)
        if (abs > 0) heap.push(abs)
    }

    return heap.length() < 1 ? 0 : heap.shift()
}

class WeightHeap {
    nums: number[]
    constructor(stones: number[]) {
        this.nums = stones.sort((a, b) => b - a)
    }

    length(): number {
        return this.nums.length
    }

    shift(): number {
        return this.nums.shift()!
    }

    push(val: number) {
        let i = 0
        while (this.nums.length > i && this.nums[i] > val) i++
        this.nums.splice(i, 0, val)
    }
}
