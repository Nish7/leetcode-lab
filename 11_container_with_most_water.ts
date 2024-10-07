// strategy: left pointer and right pointer. left pointer is going to be compared to right pointer, if the left  > right pointer, then right++, or else left ++ and right++
// while this happens calculate the area and keep track of the max

// THIS STRATEGY: Doesnt work in all situation, such as [1,2,1], this moves in left and right as expected, however, doesnt consider 1 * 2 situation
// to remediate this situation, we go with intialization of the right pointer with right-test or length of the array.and then narrow down

// This is the fixed one:
function maxArea(height: number[]): number {
  let maxArea = 0

  let left = 0
  let right = height.length - 1

  while (left < right) {
    const leftv = height[left]
    const rightv = height[right]

    // calculate the area
    const w = right - left
    const h = Math.min(rightv, leftv)
    const area = w * h
    // determine and store the max area
    maxArea = Math.max(area, maxArea)

    // now what happens? next steps, move on to the next pointer
    if (leftv >= rightv) {
      right--
    } else if (rightv > leftv) {
      left++
    }
  }

  return maxArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
