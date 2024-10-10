// Approach: Look first which side it is sorted, create happy/sorted path if that not the case, look the other way instead. As it is binary search with sorted arry it always going to one way the other. If condition always is happy scenario
function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    if (nums.length == 1 && nums[0] == target) return 0

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] >= nums[left]) {
            if (target <= nums[mid] && target >= nums[left]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else if (nums[mid] <= nums[right]) {
            if (target <= nums[right] && target >= nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
}
console.log(search([4, 5, 6, 1, 2, 3, 4], 6))
console.log(search([1, 3], 3))
