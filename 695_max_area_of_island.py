from typing import List


# Approach: Go through each island and keep a track of the dfs from the launch point
# in the main code or outer loop
class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        max_area = 0

        visisted_nodes = set()

        def dfs(row, col) -> int:
            if (
                row < 0
                or row >= len(grid)
                or col >= len(grid[0])
                or col < 0
                or grid[row][col] == 0
                or (row, col) in visisted_nodes
            ):
                return 0

            visisted_nodes.add((row, col))

            return (
                dfs(row + 1, col)  # down
                + dfs(row - 1, col)  # up
                + dfs(row, col + 1)  # right
                + dfs(row, col - 1)  # left
                + 1  # for its own
            )

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] != 0:
                    max_area = max(dfs(i, j), max_area)

        return max_area  # O(m * n)


grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]

print(Solution().maxAreaOfIsland(grid))
