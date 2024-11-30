from typing import List


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # Approach: dfs approach to go through each path recurisvely starting and detecting a cycle
        #  build a adjacency list for all courses
        # then recurse

        # Build the adjacency List
        graph = {i: [] for i in range(numCourses)}  # {0: [], 1: [], ...}
        for course, preq in prerequisites:
            graph[preq].append(course)

        visited_courses = set()

        def dfs(course, path):
            if course in path:
                return False
            if course in visited_courses:
                return True

            path.add(course)

            for dc in graph[course]:
                if not dfs(dc, path):
                    return False

            path.remove(course)
            visited_courses.add(course)
            return True

        # recurse down the prequesite course until you find already visited_path
        # consider each possible path to for the cyclical nature
        for course in graph:
            if course not in visited_courses:
                if not dfs(course, set()):
                    return False

        return True
