function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Approach: do a binary search on differnt partions in the nums1 and num2'
    let n = nums1.length + nums2.length
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

    let low = 0
    let high = nums1.length
    let left = Math.floor((nums1.length + nums2.length + 1) / 2)

    //nums1: [1 | 3, 8]  (partition at index 1)
    //nums2: [7, 9, 10 | 11]  (partition at index 3)

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const mid2 = left - mid

        let l1 = nums1[mid - 1] ?? -Infinity
        let r1 = nums1[mid] ?? Infinity
        let l2 = nums2[mid2 - 1] ?? -Infinity
        let r2 = nums2[mid2] ?? -Infinity

        if (r2 >= l1 && l2 <= r1) {
            // we have match
            if (n % 2 == 1) {
                return Math.max(l1, l2)
            } else {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2
            }
        } else if (l1 > r2) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return 0
}
