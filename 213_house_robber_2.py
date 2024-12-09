from typing import List


class Solution:
    def robHouse(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        if len(nums) == 2:
            return max(nums[0], nums[1])

        memo = {}

        def cal(n):
            if n >= len(nums):
                return 0

            if n in memo:
                return memo[n]

            memo[n] = max(nums[n] + cal(n + 2), cal(n + 1))
            return memo[n]

        return cal(0)

    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[1]
        if len(nums) == 2:
            return max(nums[0], nums[1])

        return max(self.robHouse(nums[1:]), self.robHouse(nums[0:-1]))


a = [1, 2, 3, 1]
s = Solution().rob(a)
print(s)
