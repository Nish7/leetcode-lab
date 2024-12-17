class Solution:
    def countSubstrings(self, s: str) -> int:
        # build a dp array
        # return a lenght of the Trues in the dp array
        # expand on the center idea
        # think about the time complexiity

        dp = [[False for _ in range(len(s))] for _ in range(len(s))]
        count = 0

        for j in range(len(s)):
            dp[j][j] = True
            count += 1

            for i in range(j):
                if s[i] == s[j] and (j - i <= 2 or dp[i + 1][j - 1]):
                    dp[i][j] = True
                    count += 1

        return count


a = Solution().countSubstrings("abc")
b = Solution().countSubstrings("aaa")
print(a, b)
