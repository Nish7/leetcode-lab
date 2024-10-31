from typing import List

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        k = len(nums) - k

        # basically to sort the nums
        def quickselect(l, r):
            pivot = l

            # loop over the subarray till but not including right most element
            for i in range(l, r):
                # keep comparing the number with the pivot and decide where does it belong
                if nums[i] <= nums[r]:
                    nums[pivot], nums[i] = nums[i], nums[pivot]
                    pivot += 1

            # swap the pivot with the right most element  
            nums[pivot], nums[r]  = nums[pivot], nums[pivot]
            if pivot > k: return quickselect(l, pivot - 1)
            elif pivot < k: return quickselect(pivot + 1, r)
            else: return nums[pivot]

        return quickselect(0, len(nums) - 1) 