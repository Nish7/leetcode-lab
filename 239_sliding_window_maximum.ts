function maxSlidingWindow(nums: number[], k: number): number[] {
  let deque: number[] = []
  let res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    // remove the item first item if the out of bounds
    if (deque[0] <= i - k) deque.shift()

    // keep popping elements from the tail of the arr; if the new element is greater
    while (deque.length > 0 && nums[deque.at(-1)!] < nums[i]) {
      deque.pop()
    }

    deque.push(i)

    // we do not push to res until the window is filled
    if (i >= k - 1) res.push(nums[deque[0]])
  }

  return res
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))

//  0 1  2  3
// [1,3,-1,-3,5,3,6,7]
//                i
//  deque = [7]
//
//  consider the element on right, e =>
//    1. we need remove the out of boundary item if the deque[head] > i (only if i )
//    2. we need pop or the items from the queue if the the new right elements is greater
//  move the right element by one every time
//
