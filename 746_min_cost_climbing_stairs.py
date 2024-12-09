from typing import List


class Solution:
    def minCostClimbingStairsTopDown(self, cost: List[int]) -> int:
        # top down approach with recursion
        # bceause we do be starting from the top value and then go down
        # 3
        #   2
        #       1 -> 0
        #       0 -> 0
        #   1 -> 0
        memo = {0: 0, 1: 0}

        def f(n):
            if n in memo:
                return memo[n]
            else:
                memo[n] = min(f(n - 1) + cost[n - 1], f(n - 2) + cost[n - 2])
                return memo[n]

        f(len(cost))
        return memo[len(cost)]

    def minCostClimbingStairsBottomApprach(self, cost: List[int]) -> int:
        # prices = [10, 15, 20]
        # dp = [0, 0, 10]
        # bottom up approach -> we are statign from the base cases
        # with tabulation -> this can be space optimised
        # either jump 1 from 20 or jump by 2 from 15
        # to reach to step 3 => min(dp[n - 2] + prices[n - 2], dp[n - 1] + prices[n- 1])
        # => min(dp[1] + 15, dp[2] + 20)
        # min(0 + 15, 10 + 20) = 15
        # dp[3] = 15
        stair = len(cost) + 1  # 3
        dp = [0] * (stair)
        for i in range(2, stair):
            dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])

        return dp[-1]
