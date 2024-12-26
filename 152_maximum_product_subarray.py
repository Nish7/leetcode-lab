from typing import List


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        # two pass system goes thourgh the arr twice
        # issue with approach currently, it works without the zero in it
        l = [0] * len(nums)
        r = [0] * len(nums)
        for i in range(len(nums)):
            if i == 0:
                l[i] = nums[i]
                continue
            l[i] = l[i - 1] * nums[i] if l[i - 1] != 0 else nums[i]

        for i in range(len(nums) - 1, 0, -1):
            if i == len(nums) - 1:
                r[i] = nums[i]
                continue
            r[i] = r[i + 1] * nums[i] if r[i + 1] != 0 else nums[i]

        return max(max(l), max(r))
