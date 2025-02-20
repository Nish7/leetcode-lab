from typing import List


# Approach: backtracking Solution
# we gotta do brute force solution each char by char and find its neighbouring characters
# matches the expected char we are looking for
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows, col = len(board), len(board[0])
        path = set()

        def dfs(r, c, i):
            # we reach the end of the word
            if i == len(word):
                return True

            # negative cases: this are the cases we wanna return False
            if (
                r < 0
                or c < 0
                or c >= col
                or r >= rows
                or word[i] != board[r][c]
                or (r, c) in path
            ):
                return False

            path.add((r, c))

            res = (
                (dfs(r + 1, c, i + 1))
                or (dfs(r - 1, c, i + 1))
                or (dfs(r, c + 1, i + 1))
                or (dfs(r, c - 1, i + 1))
            )

            path.remove((r, c))

            return res

        for r in range(rows):
            for c in range(col):
                if dfs(r, c, 0):
                    return True

        return False


if __name__ == "__main__":
    Solution().exist(
        [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"
    )
