from collections import deque
from typing import List


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        # find the rotten oranges
        # do the bfs approach and and keep counter until none of the oranges are left

        q = deque()
        visited_oranges = set()
        oranges = 0

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 2:  # add rotten orange
                    q.append((i, j))
                    visited_oranges.add((i, j))
                if (
                    grid[i][j] == 1 or grid[i][j] == 2
                ):  # count the oranges for later use
                    fresh_oranges += 1

        def traverse(row, col):
            if (
                row < 0
                or col < 0
                or row >= len(grid)
                or col >= len(grid[0])
                or (row, col) in visited_oranges
                or grid[row][col] == 0  # skip the empty cell
            ):
                return

            q.append((row, col))
            visited_oranges.add((row, col))

        if not oranges:
            return 0

        time = -1
        while q:
            for i in range(len(q)):
                r, c = q.popleft()
                # traverse in all direction
                traverse(r + 1, c)
                traverse(r - 1, c)
                traverse(r, c + 1)
                traverse(r, c - 1)
            time += 1

        if len(visited_oranges) != oranges:
            return -1

        return time


grid = [[1]]  # there is one fresh orange
Solution().orangesRotting(grid)
