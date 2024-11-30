from typing import List


class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        # Approach:
        # Get all O on the edges on the wall
        # do a bfs to find all the 0s connected to the Os in the edge
        # mark them as non-covertible
        # then convert all the remaining ones to Xs
        # i am leaning towards the dfs approach
        rows, cols = len(board), len(board[0])
        visited_nodes = set()

        def dfs(i, j):
            # traverse in all direction
            if (
                i < 0
                or j < 0
                or i >= rows
                or j >= cols
                or (i, j) in visited_nodes
                or board[i][j] != "O"
            ):
                return

            board[i][j] = "S"  # mark all the 0 which are "safe" as S
            visited_nodes.add((i, j))
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)

        # for right and left edges
        for i in range(rows):
            dfs(i, 0)
            dfs(i, cols - 1)

        # for top and bottom edges
        for i in range(cols):
            dfs(0, i)
            dfs(rows - 1, i)

        # go through each nodes and remove the ones replace all the Os with X and S with Os
        for i in range(rows):
            for j in range(cols):
                if board[i][j] == "O":
                    board[i][j] = "X"
                if board[i][j] == "S":
                    board[i][j] = "O"
