from typing import List


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        prod = [self.getLetters(int(ch)) for ch in digits]  #  [[], [], []]
        res = []
        path = []

        def dfs(level):
            if level >= len(prod):
                res.append("".join(path))
                return

            for i in range(len(prod[level])):
                ch = prod[level][i]
                path.append(ch)
                dfs(level + 1)
                path.pop()

        dfs(0)
        return res

    def getLetters(self, number: int):
        return {
            2: ["a", "b", "c"],
            3: ["d", "e", "f"],
            4: ["g", "h", "i"],
            5: ["j", "k", "l"],
            6: ["n", "m", "o"],
            7: ["p", "q", "r", "s"],
            8: ["t", "u", "v"],
            9: ["w", "x", "y", "z"],
        }[number]


print(Solution().letterCombinations("23"))
