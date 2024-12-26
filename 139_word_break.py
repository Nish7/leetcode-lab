from typing import List, Optional


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        cache: List[Optional[bool]] = [None] * (len(s) + 1)

        def canBreak(index):
            if index == len(s):
                return True

            if cache[index] is not None:
                return cache[index]

            for word in wordDict:
                if s[index:].startswith(word) and canBreak(
                    index + len(word)
                ):  # so basically any prefix from the word
                    cache[index] = True
                    return True

            cache[index] = False
            return False

        return canBreak(0)

    # this doesnt work; this has some issues with the segmentation of all type.
    # this is more of greedy solution
    def wordBreakNW(self, s: str, wordDict: List[str]) -> bool:
        dict = set(wordDict)
        sti = 0
        lenwf = 0
        while sti < len(s):
            found = False
            for i in range(sti + 1, len(s) + 1):
                print(s[sti:i], sti, s[sti:i] in dict)
                if s[sti:i] in dict:
                    found = True
                    lenwf += i - sti
                    sti = i

            if not found:
                break

        print(lenwf)
        return len(s) == lenwf


a = Solution().wordBreak("leetcode", ["leet", "code"])
print(a)
