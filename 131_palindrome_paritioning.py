from typing import List


# Approach: take a prefifx and process the suffix recrusively
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []
        path = []

        def backtrack(start, partition):
            if not self.isPalindrome(partition):
                return

            if start >= len(s):
                res.append(path.copy())
                return

            for i in range(start + 1, len(s) + 1):
                path.append(s[start:i])
                backtrack(i, s[start:i])
                path.pop()

        backtrack(0, "")
        return res

    def isPalindrome(self, s: str):
        return s[::-1] == s


Solution().partition("abcaa")
Solution().partition("aab")
Solution().partition("aaab")
Solution().partition("abbab")
