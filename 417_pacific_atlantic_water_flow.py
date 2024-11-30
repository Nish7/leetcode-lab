from collections import deque
from typing import List


class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        # Approach: Create two sets, set_a and set_p which contains the all the nodes with the respective ocean
        # Use 2 BFS and geneerate those sets
        # Take the edges as the starting points and append them to the queue
        # Compare both the sets
        def traverse(i, j, neighbor, sets):
            if (
                i < 0
                or j < 0
                or i >= len(heights)
                or j >= len(heights[0])
                or neighbor > heights[i][j]
                or (i, j) in sets
                or (i, j) in q
            ):
                return

            q.append((i, j))
            sets.add((i, j))

        # Atlantic: right and down edges ---------
        q = deque()
        set_a = set()
        for i in range():
            a_c = (i, len(heights[0]) - 1)
            set_a.add(a_c)
            if a_c not in q:
                q.append(a_c)

        for j in range(len(heights[0])):
            b_c = (len(heights) - 1, j)
            set_a.add(b_c)
            if b_c not in q:
                q.append(b_c)

        while q:
            for _ in range(len(q)):
                i, j = q.popleft()
                neighbor = heights[i][j]
                traverse(i + 1, j, neighbor, set_a)  # down
                traverse(i - 1, j, neighbor, set_a)  # up
                traverse(i, j + 1, neighbor, set_a)  # right
                traverse(i, j - 1, neighbor, set_a)  # left

        # Pacific : up and down -----------
        q.clear()
        set_p = set()
        for i in range(len(heights)):
            a_c = (i, 0)
            set_p.add(a_c)
            if a_c not in q:
                q.append(a_c)

        for j in range(len(heights[0])):
            b_c = (0, j)
            set_p.add(b_c)
            if b_c not in q:
                q.append(b_c)

        while q:
            for _ in range(len(q)):
                i, j = q.popleft()
                neighbor = heights[i][j]
                # traverse in all direction
                traverse(i + 1, j, neighbor, set_p)  # down
                traverse(i - 1, j, neighbor, set_p)  # up
                traverse(i, j + 1, neighbor, set_p)  # right
                traverse(i, j - 1, neighbor, set_p)  # left

        return [list(i) for i in set_a.intersection(set_p)]


# heights = [
#     [1, 2, 2, 3, 5],
#     [3, 2, 3, 4, 4],
#     [2, 4, 5, 3, 1],
#     [6, 7, 1, 4, 5],
#     [5, 1, 1, 2, 4],
# ]

heights = [[1, 1], [1, 1], [1, 1]]
print(Solution().pacificAtlantic(heights))
