from collections import deque
from typing import List


class Solution:
    # Prioritse BFS Solution: Becasue its goes through the only neccessary path only as its stops
    # before we find the path or treasure,  while the dfs go through each path.
    # Concepts of handling the visisted_nodes and queue still seems to intersting to me
    # and little bit confusing
    def islandsAndTreasureBFS(self, grid: List[List[int]]) -> None:
        # find the treasure first
        q = deque()  # (row, col)
        dist = 0
        visited_nodes = set()

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 0:
                    q.append((i, j))
                    visited_nodes.add((i, j))

        # go through from the treasure coordinate in a bfs manner.
        def traverse(row, col):
            if (
                row >= len(grid)
                or row < 0
                or col < 0
                or col >= len(grid[0])
                or grid[row][col] == -1
                or (row, col) in visited_nodes
            ):
                return

            q.append((row, col))
            visited_nodes.add((row, col))

        # you can think, adding the visting nodes as seen nodes and once you see them
        # we process them or add the dist
        while q:
            for i in range(len(q)):
                r, c = q.popleft()
                grid[r][c] = dist

                # move outwards in the all directions
                traverse(r + 1, c)
                traverse(r - 1, c)
                traverse(r, c + 1)
                traverse(r, c - 1)

            dist += 1

    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        def dfs(row, col, count, path):
            if (
                row >= len(grid)
                or row < 0
                or col < 0
                or col >= len(grid[0])
                or grid[row][col] == -1
                or (row, col) in path
            ):
                return float("inf")

            if grid[row][col] == 0:
                return count

            return min(
                dfs(row + 1, col, count + 1, path + [(row, col)]),
                dfs(row - 1, col, count + 1, path + [(row, col)]),
                dfs(row, col + 1, count + 1, path + [(row, col)]),
                dfs(row, col - 1, count + 1, path + [(row, col)]),
            )

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] != 0 and grid[i][j] != -1:
                    grid[i][j] = dfs(i, j, 0, [])

        return grid


grid = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
]
Solution().islandsAndTreasureBFS(grid)
