from typing import List


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        visited_nodes = set()
        n = 0

        def dfs(row, col):
            if (
                row < 0
                or row >= len(grid)
                or col < 0
                or col >= len(grid[0])
                or grid[row][col] == "0"
                or (row, col) in visited_nodes
            ):
                return False

            visited_nodes.add((row, col))

            dfs(row + 1, col)  # down
            dfs(row, col + 1)  # right
            dfs(row - 1, col)  # up
            dfs(row, col - 1)  # left

            return True

        # go through each cell one by one to consider as its starting poit
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if (i, j) not in visited_nodes or grid[i][j] != "1":
                    if dfs(i, j):
                        n += 1

        return n


grid = [["1", "1", "1"], ["0", "1", "0"], ["0", "1", "0"]]
print(Solution().numIslands(grid))
