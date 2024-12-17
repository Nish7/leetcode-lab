class Solution:
    def longestPalindrome(self, s: str) -> str:
        # apporach: we move the pointer one by one and keep checking the and left index.
        # "racecar" is good example
        dp = [[False for _ in range(len(s))] for _ in range(len(s))]

        res = s[0]
        resLen = 1

        for j in range(len(s)):
            dp[j][j] = True  # mark all the single char as palindromic
            for i in range(j):
                if s[i] == s[j] and (
                    j - i <= 2 or dp[i + 1][j - 1]
                ):  # if the s[i] == s[j] is same, we consider the length
                    # if it is less than 2, (aba) then they are palindromic automaitoncally
                    # or is greater; dp[i + 1][j - 1] = ??
                    dp[i][j] = True
                    if j - i + 1 > resLen:
                        res = s[i : j + 1]
                        resLen = j - i + 1

        return res

    def longestPalindromeCenter(self, s: str) -> str:
        # Approach: start from the center and expand outways, and keep checkign the the oppsite index
        # they should be the same
        res = ""
        maxLen = 0

        for i in range(len(s)):
            r, l = i, i
            while l >= 0 and r < len(s) and s[r] == s[l]:
                if r - l + 1 > maxLen:
                    res = s[l : r + 1]
                    maxLen = r - l + 1

                l -= 1
                r += 1

            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[r] == s[l]:
                if r - l + 1 > maxLen:
                    res = s[l : r + 1]
                    maxLen = r - l + 1

                l -= 1
                r += 1

        print(res)
        return res

    def longestPalindromNaive(self, s: str) -> str:
        # how do we check a pandromic substring
        # check all the substring
        # we can do a n^2 approach
        # check each substr and see if its panlindromic if it is compare the its len
        # with the max lenght

        # babad

        def isPalidromic(strin: str):  # boolean
            return strin[::-1] == strin

        maxl = 0
        max_str = ""
        for i in range(len(s) - 1):  # 0..n-1
            for j in range(i + 1, len(s)):  # 1..n
                print(s[i:j])
                if isPalidromic(s[i:j]) and maxl < len(s[i:j]):
                    max_str = s[i:j]
                    maxl = len(s[i:j])

        print(max_str)
        return max_str


a = Solution().longestPalindrome("babad")
b = Solution().longestPalindrome("cbbd")
print(a, b)
