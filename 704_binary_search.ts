function search(nums: number[], target: number): number {
  let min = 0
  let max = nums.length - 1

  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    let val = nums[mid]
    if (val == target) return mid
    if (val > target) {
      max--
    } else if (val < target) {
      min++
    }
  }

  return -1
}

// approach: keep a track of the min and max. calcualte the mid everytime
// keep looping in a while loop until min < max
// and/or we find the find the elemetn

console.log(search([-1, 0, 3, 5, 9, 12], 9))
