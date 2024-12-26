from typing import List
from collections import deque


# Meta: not working sol:
# [1,2,5] and amount = 11
# 1x + 2y + 5z = 11-> if you solve for this eq you get your answer
# this doesnt work, as it cannot scale up to n
# another apporach might not work: is using a sorted coins and with subtracting in a loop
# this doesnt work because it might need to fallback on the another coin not alwyas the last biggest value
# basically greedy doesnt work
class Solution:
    def coinChangeTopdown(self, coins: List[int], amount: int) -> int:
        dp = [float("inf")] * (
            amount + 1
        )  # why amount + 1 -> lets say 5 isthe amount. we need index = 5. so we create a arr with 6 elements we have 5th index

        for _ in range(1, len(dp)):
            for coin in coins:
                if a - coin >= 0:
                    dp[a] = min(dp[a], dp[a - coin] + 1)

        return int(dp[amount]) if dp[amount] != float("inf") else -1

    def coinChangeBT(self, coins: List[int], amount: int) -> int:
        cache = {c: 1 for c in coins}
        cache[0] = 0

        def dfs(am):
            if am < 0:
                return -1
            if am in cache:
                return cache[am]

            m = float("inf")
            for coin in coins:
                min_val = dfs(am - coin)
                if min_val >= 0:
                    m = min(m, min_val + 1)

            cache[am] = int(m) if m != float("inf") else -1
            return cache[am]

        return dfs(amount)

    def coinChangeBacktrack(self, coins: List[int], amount: int) -> int:
        q = deque()
        for i in coins:
            q.append(i)

        c = 1
        while q:  # [1,2,5] -> [2, 3, 6, ]
            print(q, c)
            for _ in range(len(q)):
                s = q.popleft()

                if s == amount:
                    return c

                for i in coins:
                    if i + s > amount:
                        continue
                    q.append(i + s)
            c += 1

        return -1

    def coinChangeBacktrackDFS(self, coins: List[int], amount: int) -> int:

        def backtrack(s, c):
            print(s, c)
            if s > amount:
                return float("inf")
            if s == amount:
                return c

            m = float("inf")
            for i in range(len(coins)):
                m = min(m, backtrack(s + coins[i], c + 1))

            return m

        return int(backtrack(0, 0))


# a = Solution().coinChangeBT([1, 2, 5], 11)
a = Solution().coinChangeBT([186, 419, 83, 408], 6249)
print(a)
