// Approach: it can be roated 1 to len(arr)times, we can use binary search to search for min rotation required
// which is being tracked on the left
// how to do rotation: [0,1,2,3,4]
// [3,4,0,1,2] = r = 2
// 0 -> 2
// 4 -> 1 => 4 + 2 mod 5 = 1
// Actual Approach: do a binary search, if the right is less than equal mid point, then move the
// left pointer to the mid + 1
function findMin(nums: number[]): number {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        console.log(mid)
        if (nums[mid] < nums[right]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return nums[left]
}

console.log(findMin([3, 4, 5, 1, 2]))
