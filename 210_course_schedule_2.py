from collections import deque
from typing import List


class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        # Kahn's Algorithm - Topological Sort
        # approach: build a in-degree array for the preq
        # add all teh 0 in-degee in the queue
        # process the 0 in-degree vertices and remove the that node from the neighbor. and decrease
        # its in-degere number. if it reduces down to 0
        # add them to the queue.
        # keep processing until the queue is empty.
        # if there are remaning non-zero courses, there is cicuit/cycle
        # maintain a res list to store the order of the courses

        graph = {i: [] for i in range(numCourses)}
        indegree = {i: 0 for i in range(numCourses)}

        for course, preq in prerequisites:
            indegree[course] += 1
            graph[preq].append(course)

        queue = deque()  # course
        res = []

        for course in indegree:
            if indegree[course] == 0:
                queue.append(course)

        while queue:
            for _ in range(len(queue)):
                # process the course
                course = queue.popleft()
                res.append(course)
                print(course)

                # process all the neighbor and remove the count
                for n in graph[course]:
                    indegree[n] -= 1
                    if indegree[n] == 0:
                        queue.append(n)

        # check for cycles
        for course in indegree:
            if indegree[course] != 0:
                return []

        return res


# preq = [[1, 0], [2, 0], [3, 1], [3, 2]] # multiple dependciens
# print(Solution().findOrder(4, preq))
