class Solution:
    def climbStairsOptimised(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2

        prev = 1
        curr = 2
        for _ in range(2, n):
            prev, curr = (
                curr,
                prev + curr,
            )  # interesting that this gets does nt get evaluated like sequentially

        return curr

    def climbStairsBottomUp(self, n: int) -> int:
        # this is bottom up approach with tabulations:
        # keep track of the each consequent one and use the older already calculated value
        # [1,1,2,3,5,8] -> basically like fib
        if n == 1:
            return 1
        if n == 2:
            return 2

        dp = [0] * n  # [0, 0, 0, 0]
        dp[0] = 1
        dp[1] = 2

        for i in range(2, n):
            dp[i] = dp[i - 1] + dp[i - 2]

        return dp[n]

    def climbStairsTopDown(self, n: int) -> int:
        # this is top-down approach. and memoize subproblems solutions
        # 3 -> 2 + 1 which means to get to 3rd step. there is 2 ways we can get to the 2 and 1 way to get to 1
        # so we either use 1step or 2 step to basically to get the 3rd step
        memo = {1: 1, 2: 2}

        def f(n):
            if n in memo:
                return memo[n]
            else:
                memo[n] = f(n - 1) + f(n - 2)
                return memo[n]

        return memo[n]

    def climbStairsSlow(self, n: int) -> int:
        ways = [0]

        def backtrack(path, sum):
            if sum > n:
                return

            if sum == n:
                ways[0] += 1
                return

            for i in [1, 2]:
                backtrack(path + [i], sum + i)

        backtrack([], 0)
        return ways[0]


# Solution().climbStairs(5)
# Solution().climbStairs(38)
# Solution().climbStairs(2)
# Solution().climbStairs(3)
