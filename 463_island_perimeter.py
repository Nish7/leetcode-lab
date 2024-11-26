from typing import List


# Approach: go through each cell with 1, and figure out which direction you can possibly build a "wall/fence", consider each direction
# consider edges; solution is technically very easy, bt the figuring out the solution seems little bit difficult conceptually
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        perimter = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                cell = grid[i][j]
                if cell == 1:
                    if i + 1 >= len(grid) or grid[i + 1][j] == 0:  # down
                        perimter += 1

                    if i - 1 < 0 or grid[i - 1][j] == 0:  # up
                        perimter += 1

                    if j + 1 > len(grid[0]) or grid[i][j + 1] == 0:  # right
                        perimter += 1

                    if j - 1 < 0 or grid[i][j - 1] == 0:  # left
                        perimter += 1

        return perimter


grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
Solution().islandPerimeter(grid)
