from typing import List, Tuple


class Solution:
    # Approach: backtracking: start with the queens placed on top axis; move the queens just down one by one depedning on the attack vector.
    # backtrack and go down by 1; and start again
    def solveNQueens(self, n: int) -> List[List[str]]:
        sol = []

        def backtrack(path):
            if not self.canQueenAttack(path):
                return

            if len(path) == n:
                sol.append(path)
                return

            for i in range(n):
                c = (i, len(path))
                backtrack(path + [c])

        backtrack([])
        return [self.constructBoard(i, n) for i in sol]

    def canQueenAttack(self, coord: List[Tuple[int, int]]) -> bool:
        # this can be improved by using a col, dig1 and diag2
        # track col and dig1 occuped in each path
        # there is row-col and row+col property of the board which helps in diagonial pruning
        # and prune early based on that
        # currently this is O(n^2)
        for i in range(len(coord) - 1):
            a_x, a_y = coord[i]
            for j in range(i + 1, len(coord)):
                b_x, b_y = coord[j]
                n_x, n_y = b_x - a_x, b_y - a_y
                if a_x == b_x or a_y == b_y or abs(n_x) == abs(n_y):
                    return False

        return True

    def constructBoard(self, path: List[Tuple[int, int]], n: int) -> List[str]:
        board = [["."] * n for _ in range(n)]

        for x, y in path:
            board[x][y] = "Q"

        return ["".join(i) for i in board]


# Tests

# Solution().solveNQueens(4)
# Solution().solveNQueens(5)

# Testing constructBoard
Solution().constructBoard([(1, 0), (3, 1), (0, 2), (2, 3)], 4)

# Testing isValidBoard
# Solution().canQueenAttack([(0, 0), (0, 1), (0, 2)])  # false
# Solution().canQueenAttack([(0, 0), (0, 1)])  # false
# Solution().canQueenAttack([(0, 0), (1, 1)])  # false
# Solution().canQueenAttack([(0, 1), (1, 1)])  # false
# Solution().canQueenAttack([(0, 0), (1, 3)])  # true
# Solution().canQueenAttack([(1, 0), (3, 1), (0, 2), (2, 3)])  # true
# Solution().canQueenAttack([(1, 0), (3, 1), (0, 2), (3, 3)])  # false
# Solution().canQueenAttack([(1, 0), (3, 1), (0, 2), (4, 3), (2, 4)])  # false
