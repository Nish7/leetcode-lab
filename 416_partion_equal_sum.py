from typing import List


class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        # [True, False, False]
        # num = 1
        # j 11 .. 1
        # j = 11
        # j = 11 - 1 = 10
        # j = 10
        # j = 10 - 1 = 9
        # ..
        # j = 1
        # j = 1 - 1 = 0 = true

        # num = 5
        # j = 11
        # j = 11 - 5 = dp[6]
        # j = 10 - 5 = 6
        # j = 10 - 5 = 4
        # dp[6] = 6 - 5 = dp[1] = true
        # ^ with the num of 5, total subset sum of 6 can be
        # achieved,
        # along  with the subset of 5
        # dp[5] = 5 - 5 = dp[0] = true

        # num = 11
        # j = 11 - 11 = 0
        # dp[11] = true

        # num = 5
        # j = 11 - 5 = dp[6] = true
        target = sum(nums) // 2
        if sum(nums) % 2 != 0:
            return False

        dp = [False] * (target + 1)
        dp[0] = True

        for num in nums:
            print(num)
            for j in range(target, num - 1, -1):
                dp[j] = dp[j] or dp[j - num]
                print(dp)

        return dp[target]

    def canPartitionTD(self, nums: List[int]) -> bool:  # n^2 log n
        target = sum(nums) / 2
        if sum(nums) % 2 != 0:
            return False

        cache = {}

        def haveSubsetSum(ind, t):
            if t == 0:
                return True
            if ind >= len(nums) or t < 0:
                return False

            if (ind, t) in cache:
                return cache[(ind, t)]

            v = haveSubsetSum(ind + 1, t - nums[ind]) or haveSubsetSum(ind + 1, t)
            cache[(ind, t)] = v
            return v

        return haveSubsetSum(0, target)

    def canPartitionBC(self, nums: List[int]) -> bool:  # n^2 log n
        target = sum(nums) / 2
        if sum(nums) % 2 != 0:
            return False

        cache = {}

        nums.sort()

        def backtrack(start, current_sum):
            print(start, current_sum)
            if current_sum > target:
                return False

            if current_sum == target:
                return True

            if (start, current_sum) in cache:
                return cache[(start, current_sum)]

            for i in range(start, len(nums)):
                if i > start and nums[i] == nums[i - 1]:
                    continue

                n = nums[i]
                if backtrack(i + 1, current_sum + n):
                    cache[(start, current_sum)] = True
                    return True

            cache[(start, current_sum)] = False
            return False

        return backtrack(0, 0)


a = Solution().canPartition([1, 5, 11, 5])
# a = Solution().canPartition([1, 2, 3, 5])
# a = Solution().canPartition([2, 2, 1, 1])
print(a)
