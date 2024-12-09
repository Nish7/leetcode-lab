from typing import List


class Solution:
    def robBU(self, nums: List[int]) -> int:
        # [2,1,3,3,2]
        # we build a tabulation sequtially to track max we can get uptil that point
        # by a) either steal the current house and get the max we can get from the non-adjacent previous onces
        # by b) do not the steal and get the max from the adjacent ones
        # [2, 2, max(3 + 2, 2)= 5, max(5, 3 + 2)=5, max(5, 2 + 5)=7]
        if len(nums) == 2:
            return nums[0]
        if len(nums) == 2:
            return max(nums[0], nums[1])

        dp = [0] * len(nums)
        dp[0] = nums[0]
        dp[1] = max(nums[1], nums[0])

        for i in range(len(nums)):
            dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

        return dp[-1]

    def robDT(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        if len(nums) == 2:
            return max(nums[0], nums[1])

        memo = {}

        def cal(n):
            if n in memo:
                return memo[n]
            if n >= len(nums):
                return 0

            memo[n] = max(nums[n] + cal(n + 2), cal(n + 1))
            return memo[n]

        return cal(0)


#
# # Solution().rob([2, 1, 1, 2]) # 4
a = Solution().robBU([2, 7, 9, 3, 1])  # 12
print(a)
# # Solution().rob([1, 2, 3, 1])  # 4
